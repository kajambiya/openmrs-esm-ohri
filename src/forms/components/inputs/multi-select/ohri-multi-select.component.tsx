import { ListItem, MultiSelect, UnorderedList } from 'carbon-components-react';
import { useField } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { OHRIFormContext } from '../../../ohri-form-context';
import { OHRIFormFieldProps } from '../../../types';
import { OHRILabel } from '../../label/ohri-label.component';
import { OHRIValueEmpty } from '../../value/ohri-value.component';
import { useTranslation } from 'react-i18next';
import styles from '../_input.scss';
import { isTrue } from '../../../utils/boolean-utils';
import { getConceptNameAndUUID, isInlineView } from '../../../utils/ohri-form-helper';
import { fieldRequiredErrCode } from '../../../validators/ohri-form-validator';
import { OHRIFieldValueView } from '../../value/view/ohri-field-value-view.component';

export const OHRIMultiSelect: React.FC<OHRIFormFieldProps> = ({ question, onChange, handler }) => {
  const { t } = useTranslation();
  const [field, meta] = useField(question.id);
  const { setFieldValue, encounterContext, layoutType, workspaceLayout } = React.useContext(OHRIFormContext);
  const [errors, setErrors] = useState([]);
  const [counter, setCounter] = useState(0);
  const [touched, setTouched] = useState(false);
  const [conceptName, setConceptName] = useState('Loading...');
  const isFieldRequiredError = useMemo(() => errors[0]?.errCode == fieldRequiredErrCode, [errors]);

  useEffect(() => {
    // Carbon's MultiSelect has issues related to not updating the component based on the `initialSelectedItems` prop
    // this is an intermittent issue. As a temporary solution, were are forcing the component to re-render
    if (field.value && field.value.length == 0) {
      // chances are high the value was cleared
      // force the Multiselect component to be re-mounted
      setCounter(counter + 1);
    } else if (!touched && question.value) {
      setCounter(counter + 1);
    }
  }, [field.value]);

  useEffect(() => {
    if (question['submission']?.errors) {
      setErrors(question['submission']?.errors);
    }
  }, [question['submission']]);

  const questionItems = question.questionOptions.answers.map((option, index) => ({
    id: `${question.id}-${option.concept}`,
    concept: option.concept,
    label: option.label,
    key: index,
  }));

  const initiallySelectedQuestionItems = [];
  questionItems.forEach(item => {
    if (field.value?.includes(item.concept)) {
      initiallySelectedQuestionItems.push(item);
    }
  });

  const handleSelectItemsChange = ({ selectedItems }) => {
    setTouched(true);
    const value = selectedItems.map(selectedItem => selectedItem.concept);
    setFieldValue(question.id, value);
    onChange(question.id, value, setErrors);
    question.value = handler.handleFieldSubmission(question, value, encounterContext);
  };

  useEffect(() => {
    getConceptNameAndUUID(question.questionOptions.concept).then(conceptTooltip => {
      setConceptName(conceptTooltip);
    });
  }, [conceptName]);

  const isInline = useMemo(() => {
    if (encounterContext.sessionMode == 'view' || isTrue(question.readonly)) {
      return isInlineView(question.inlineRendering, layoutType, workspaceLayout);
    }
    return false;
  }, [encounterContext.sessionMode, question.readonly, question.inlineRendering, layoutType, workspaceLayout]);

  return encounterContext.sessionMode == 'view' || isTrue(question.readonly) ? (
    <div className={styles.formField}>
      <OHRIFieldValueView
        label={question.label}
        value={field.value ? handler.getDisplayValue(question, field.value) : field.value}
        conceptName={conceptName}
        isInline={isInline}
      />
    </div>
  ) : (
    !question.isHidden && (
      <>
        <div
          className={
            isFieldRequiredError
              ? `${styles.multiselectOverride} ${styles.errorLabel}`
              : `${styles.multiselectOverride}`
          }>
          <MultiSelect.Filterable
            placeholder={t('filterItemsInMultiselect', 'Search...')}
            onChange={handleSelectItemsChange}
            id={question.label}
            items={questionItems}
            initialSelectedItems={initiallySelectedQuestionItems}
            label={''}
            titleText={question.label}
            key={counter}
            itemToString={item => (item ? item.label : ' ')}
            disabled={question.disabled}
            invalid={!isFieldRequiredError && errors.length > 0}
            invalidText={errors[0]?.errMessage}
          />
        </div>
        <div className={styles.formField} style={{ marginTop: '0.125rem' }}>
          {field.value?.length ? (
            <UnorderedList style={{ marginLeft: '1rem' }}>
              {handler.getDisplayValue(question, field.value)?.map(displayValue => displayValue + ', ')}
            </UnorderedList>
          ) : (
            <OHRIValueEmpty />
          )}
        </div>
      </>
    )
  );
};
