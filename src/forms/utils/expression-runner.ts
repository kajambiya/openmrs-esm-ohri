import moment from 'moment';
import { ConceptFalse, ConceptTrue } from '../constants';
import { OHRIFormField, OHRIFormPage, OHRIFormSection } from '../types';
import { isEmpty as isValueEmpty } from '../validators/ohri-form-validator';

export interface FormNode {
  value: OHRIFormPage | OHRIFormSection | OHRIFormField;
  type: 'field' | 'page' | 'section';
}

export interface ExpressionContext {
  mode: 'enter' | 'edit' | 'view';
  myValue?: any;
}

export function evaluateExpression(
  expression: string,
  node: FormNode,
  allFields: Array<OHRIFormField>,
  allFieldValues: Record<string, any>,
  context: ExpressionContext,
): boolean {
  const allFieldsKeys = allFields.map(f => f.id);
  const parts = expression.trim().split(' ');
  // setup runtime variables
  const { mode, myValue } = context;

  function isEmpty(value) {
    if (allFieldsKeys.includes(value)) {
      registerDependency(
        node,
        allFields.find(candidate => candidate.id == value),
      );
      return isValueEmpty(allFieldValues[value]);
    }
    return isValueEmpty(value);
  }

  function today() {
    return new Date();
  }

  function includes(questionId, value) {
    if (allFieldsKeys.includes(questionId)) {
      registerDependency(
        node,
        allFields.find(candidate => candidate.id === questionId),
      );
      return allFieldValues[questionId]?.includes(value);
    }
    return false;
  }

  function isDateBefore(left: Date, right: string | Date, format?: string) {
    let otherDate: any = right;
    if (typeof right == 'string') {
      otherDate = format ? moment(right, format, true).toDate() : moment(right, 'YYYY-MM-DD', true).toDate();
    }
    return left?.getTime() < otherDate.getTime();
  }

  function useFieldValue(questionId: string) {
    if (allFieldsKeys.includes(questionId)) {
      return allFieldValues[questionId];
    }
    return null;
  }

  parts.forEach((part, index) => {
    if (index % 2 == 0) {
      if (allFieldsKeys.includes(part)) {
        const determinant = allFields.find(field => field.id === part);
        registerDependency(node, determinant);
        // prep eval variables
        let determinantValue = allFieldValues[part];
        if (determinant.questionOptions.rendering == 'toggle') {
          determinantValue = determinantValue ? ConceptTrue : ConceptFalse;
        }
        if (typeof determinantValue == 'string') {
          determinantValue = `'${determinantValue}'`;
        }
        const regx = new RegExp(part, 'g');
        expression = expression.replace(regx, determinantValue);
      }
    }
  });
  try {
    return eval(expression);
  } catch (error) {
    console.error(error);
  }
  return false;
}

function registerDependency(node: FormNode, determinant: OHRIFormField) {
  switch (node.type) {
    case 'page':
      if (!determinant.pageDependants) {
        determinant.pageDependants = new Set();
      }
      determinant.pageDependants.add(node.value.label);
      break;
    case 'section':
      if (!determinant.sectionDependants) {
        determinant.sectionDependants = new Set();
      }
      determinant.sectionDependants.add(node.value.label);
    default:
      if (!determinant.fieldDependants) {
        determinant.fieldDependants = new Set();
      }
      determinant.fieldDependants.add(node.value['id']);
  }
}
