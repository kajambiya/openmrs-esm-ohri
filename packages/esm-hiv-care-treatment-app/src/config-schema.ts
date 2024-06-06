import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  encounterTypes: {
    _type: Type.Object,
    _description: 'Encounter type UUIDs for HIV.',
    _default: {
      careAndTreatmentEncounterType: '7e54cd64-f9c3-11eb-8e6a-57478ce139b0',
      clinicalVisitEncounterType: 'cb0a65a7-0587-477e-89b9-cf2fd144f1d4',
      hivProgramStatusEncounterType: 'a221448d-512b-4750-84bf-d29be9f802b3',
      htsRetrospectiveEncounterType: '79c1f50f-f77d-42e2-ad2a-d29304dde2fe',
      art_Therapy_EncounterUUID: '74bf4fe6-8fdb-4228-be39-680a93a9cf6d',
      hivLabResultsEncounterType_UUID: '15272be5-ae9c-4278-a303-4b8907eae73b',
      deathFormEncounterType_UUID: '111c2104-991d-4b58-a30e-ce84bb275534',
      transferOutEncounterType_UUID: '3044916a-7e5f-478b-9091-803233f27f91',
      PatientTracingEncounterType_UUID: '0cd5d4cb-204e-419a-9dd7-1e18e939ce4c',
      ViralLoadResultsEncounter_UUID: '41af1931-184e-45f8-86ca-d42e0db0b8a1',
      CD4LabResultsEncounter_UUID: '96adb28e-e417-43a3-8f7d-682f8af5e912',
      MentalHealthAssessmentEncounter_UUID: '36db5123-0ad5-41c0-9037-625b46e0ceef',
      PatnerNotificationEncounterType_UUID: '4dd0ee63-805f-43e9-833c-6386ba97fdc1',
      PeadsDisclosureEncounterType_UUID: '390c2f21-c1c4-4246-94ca-a026157cd1db',
      ServiceDeliveryEncounterType_UUID: '62ee5922-a229-48d3-a1da-875c1ffa9436',
      ContactTracingEncounterType_UUID: '570e9e42-4306-41dc-9bf8-634bbc70a524',
      IntimatePartnerEncounterType_UUID: '881fff34-b4a9-4d11-b2f5-a8a23a9f402b',
    },
  },
  obsConcepts: {
    _type: Type.Object,
    _description: 'List of observation concept UUIDs related to HIV.',
    _default: {
      patientTypeEnrollmentConcept: '83e40f2c-c316-43e6-a12e-20a338100281',
      populationCategoryConcept: '166432AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      keyPopulationTypeConcept: 'd3d4ae96-8c8a-43db-a9dc-dac951f5dcb3',
      priorityPopulationTypeConcept: '2bf14240-b2b2-42b2-8cf3-b5f8a0cb7764',
      dateOfHIVDiagnosisConcept: '160554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      entryPointConcept: '160540AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      re_enrolmentDateConcept: '20efadf9-86d3-4498-b3ab-7da4dad9c429',
      freeTextCommentConcept: '161011AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      dateOfEncounterConcept: '163137AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      visitTypeConcept: '8a9809e9-8a0b-4e0e-b1f6-80b0cbbe361b',
      regimenConcept: 'dfbe256e-30ba-4033-837a-2e8477f2e7cd',
      expressCareProgramStatusConcept: '159832AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      returnVisitDateConcept: '5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      tbScreeningOutcome: '160108AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      opportunisticInfectionConcept: 'c52ecf45-bd6c-43ed-861b-9a2714878729',
      generalTreatmentStatusConcept: '163105AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      hivTestResultConceptUUID: 'e16b0068-b6a2-46b7-aba9-e3be00a7b4ab',
      htsStrategyUUID: 'f0d85da0-c235-4540-a0d1-63640594f98b',
      dateOfHIVTestingConceptUUID: '164400AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      artTherapyDateTime_UUID: '159599AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      regimenLine_UUID: '164515AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      therapyPlanConcept: '7557d77c-172b-4673-9335-67a38657dd01',
      artStopDateUUID: '162572AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      switchDateUUID: '164516AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      substitutionDateUUID: '164431AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      dateRestartedUUID: '160738AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      switchReasonUUID: '160568AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      substituteReasonUUID: '160562AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      stopReasonUUID: '163513AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      hivCD4Result_UUID: '657AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      hivCD4Count_UUID: '5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      hivDeathDate_UUID: '1543AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      causeOFDeath_UUID: 'ef973f1f-557f-4620-acf5-9c4c18bf1eda',
      deathSpecific_UUID: 'e329cdf4-4eeb-4821-85ec-80ec4b503de0',
      receivingFacility_UUID: '162724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      TransferOutDate_UUID: '160649AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      verified_UUID: '797e0073-1f3f-46b1-8b1a-8cdad134d2b3',
      dateOfEventConcept: '160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      contactMethodConcept: '59c023dd-eed2-4b11-8c34-b88e9439db3c',
      ContactOutcome_UUID: 'bc45edbd-11e7-4888-ad7d-4ec3dd8cdcf6',
      PhysicalAbuse_UUID: '2a228c6a-1575-43d7-9d42-9b68d0629f46',
      EmotionalAbuse_UUID: 'bd86f7ee-1d5f-4f5d-aa0f-4680aa6e65cb',
      SexualAbuse_UUID: '1246AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      ContactTracingOutcome_UUID: '36a3e671-9d60-4109-b41f-046f44f4b389',
      CommunityDSDModel_UUID: '52824cbe-0e4d-4c18-8179-80b5799f34ed',
      DSDStatus_UUID: '8742967d-8107-4cbb-a17e-9a8c7f624673',
      DisclosureDate_UUID: '85fbdcc8-8dbc-40a9-b85f-5d1bfe1ab63d',
      DisclosureStage_UUID: '573f93e2-12f6-483e-aa6e-14e9b76b311a',
      IndexHIVStatus_UUID: '1436AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      FirstName_UUID: '166102AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      Relationship_UUID: '85d3b4fe-c1a9-4e27-a86b-dcc1e30c8a93',
      LittleInterestConcept_UUID: '167006AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      DepressionConcept_UUID: '167007AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      PoorAppetiteConcept_UUID: '167070AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      PoorConcentrationConcept_UUID: '167072AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      Cd4LabResultDate_UUID: '163724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      Cd4LabResultCountPercentage_UUID: '730AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      ViralLoadResultDate_UUID: '163724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      ReasonForViralLoad_UUID: '86cc0cfe-bace-4969-94b6-d139f4971d13',
      ViralLoadResult_UUID: '1305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      ViralLoadCopies_UUID: '856AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      enrolmentDate: '160555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      ExpressRefferalReason: '1272AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      finalPositiveHIVValueConcept: '703AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      computedHIV_StatusConcept: 'a5261998-c635-4e27-870c-e837faf6cf9a',
      linkedToCareCodeConcept: 'e8e8fe71-adbb-48e7-b531-589985094d30',
      linkedToCareYesValueConcept: '1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    },
  },
  cohorts: {
    _type: Type.Object,
    _description: 'HIV Cohorts',
    _default: {
      preTestCounsellingCohort: 'e4d801f0-e2fd-11eb-8212-7d7156e00a1f',
      waitingForHIVTestCohort: 'cdee0abe-e471-11eb-8212-7d7156e00a1f',
      postTestCounsellingCohort: '01af2130-e472-11eb-8212-7d7156e00a1f',
      clientsEnrolledToCare: '51bec6f7-df43-426e-a83e-c1ae5501372f',
      todayzAppointmentsCT: 'ccbcf6d8-77b7-44a5-bb43-d352478ea4e9',
      allPatientsCohort: '895d0025-84e2-4306-bdd9-66acc150ec21',
      missingCd4Cohort: '874b5fa2-0368-49ae-a756-5bfc6a14fc29',
      highVlCohort: '5accbc54-1a6c-4789-8104-3ade8f92d3a7',
    },
  },
  formNames: {
    _type: Type.Object,
    _description: 'HIV Form Names',
    _default: {
      ServiceEnrolmentFormName: 'Service Enrolment Form',
      ClinicalVisitFormName: 'POC Clinical Visit Form v2',
      HIVTestingFormName: 'HIV Testing',
      HTSPreTestFormName: 'HTS Pre-Test Counselling',
      ARTTherapyFormName: 'ART Therapy Form',
      deathFormName: 'Death Form',
      TransferOutFormName: 'Transfer Out Form',
      PatientTracingFormName: 'Patient Tracing Form',
      IntimatePartnerFormName: 'Intimate Partner Violence Form',
      ContactTracingFormName: 'Contact Tracing Form',
      ServiceDeliveryFormName: 'Service Delivery Model Form',
      DisclosureFormName: 'Age Appropriate Disclosure Form',
      PartnerNotificationFormName: 'Partner Notification Form',
      MentalHealthFormName: 'Mental Health Assessment Form',
      CD4LabResultsFormName: 'CD4 Lab Result',
      ViralLoadRequestFormName: 'POC Viral load request',
      ExpressVisitFormName: 'POC Express Visit Form',
    },
  },
  formUuids: {
    _type: Type.Object,
    _description: 'HIV Form Uuids',
    _default: {
      serviceEnrolmentFormUuid: '8f713e0e-94a0-3c57-9024-69520933802a',
      clinicalVisitFormUuid: 'b3abc4ce-c5ac-3c40-b8e7-442b163670f1',
      hivTestingFormUuid: '43ffea77-49dc-3ebd-8d83-c2aedb654030',
      htsPreTestFormUuid: 'a7645e21-a9f7-3abc-af2e-2f477ee74e69',
      artTherapyFormUuid: 'f99fadd8-feb7-321c-ab58-7569805668e7',
      deathFormUuid: '41af2def-841d-38b7-8d2e-df25bdd0b73f',
      transferOutFormUuid: 'a969288d-6605-361b-b01c-42f6ef25c0f5',
      patientTracingFormUuid: '71f3febd-dd11-322b-9c18-2a8a07d87af1',
      intimatePartnerFormUuid: '5c37314f-c558-3720-8780-d123c70f4e23',
      contactTracingFormUuid: '94a911a8-8da1-3c12-b696-2f3e78c2e87c',
      serviceDeliveryFormUuid: '1e14f841-b42b-3273-93db-807927ca9a82',
      disclosureFormUuid: 'cb30cea5-3166-3e88-befb-9141e5f3769d',
      partnerNotificationFormUuid: '8c48efc5-dd85-3795-9f58-8eb436a4edcc',
      mentalHealthFormUuid: '2069bd57-d534-3de9-ae24-f1d4e4b2de83',
      cd4LabResultsFormUuid: 'a66197de-419a-3223-8691-f70d36b1524b',
      viralLoadRequestFormUuid: '717eed11-55bb-3adb-9be4-3e92efcea2c8',
      expressVisitFormUuid: 'ea1efef5-33cf-363f-9e59-5d0b6563ec7c',
    },
  },
};

export interface ConfigObject {
  cohorts: Object;
  encounterTypes: Object;
  obsConcepts: Object;
  formNames: Object;
  formUuids: Object;
}
