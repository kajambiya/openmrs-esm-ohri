export const careSetting = '6f0c9a92-6f24-11e3-af88-005056821db0';

export const daysDurationUnit = {
  uuid: '1072AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  display: 'Days',
};

export const basePath = '${openmrsSpaBase}/patient/';
export const encounterRepresentation =
  'custom:(uuid,encounterDatetime,location:(uuid,name),' +
  'encounterProviders:(uuid,provider:(uuid,name)),' +
  'obs:(uuid,obsDatetime,voided,groupMembers,concept:(uuid,name:(uuid,name)),value:(uuid,name:(uuid,name),' +
  'names:(uuid,conceptNameType,name))))';

// Final HIV Test Result Concepts
export const finalHIVCodeConcept = 'e16b0068-b6a2-46b7-aba9-e3be00a7b4ab';
export const finalPositiveHIVValueConcept = '6378487b-584d-4422-a6a6-56c8830873ff';
export const computedHIV_StatusConcept = 'a5261998-c635-4e27-870c-e837faf6cf9a';

// Linked to Care Concepts
export const linkedToCareCodeConcept = 'e8e8fe71-adbb-48e7-b531-589985094d30';
export const linkedToCareYesValueConcept = '1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

// Cohorts
export const preTestCounsellingCohort = 'e4d801f0-e2fd-11eb-8212-7d7156e00a1f';
export const waitingForHIVTestCohort = 'cdee0abe-e471-11eb-8212-7d7156e00a1f';
export const postTestCounsellingCohort = '01af2130-e472-11eb-8212-7d7156e00a1f';
export const clientsEnrolledToCare = '51bec6f7-df43-426e-a83e-c1ae5501372f';
export const todayzAppointmentsCT = 'ccbcf6d8-77b7-44a5-bb43-d352478ea4e9';

// COVID Cohorts
export const clientsAssessedForCovid = 'ec373b01-4ba3-488e-a322-9dd6a50cfdf7';
export const covidClientsWithPendingLabResults = '166aa2b1-ce55-4d16-9643-ca9d2e2694ea';
export const clientsWithoutCovidOutcomes = 'db6c4a18-28c6-423c-9da0-58d19e364a7f';
export const allCovidAssessments = 'ec373b01-4ba3-488e-a322-9dd6a50cfdf7';
export const covidVaccinatedClients = 'b5d52da9-10c2-43af-ae23-552acc5e445b';
export const covid19PositiveClients = '1523b1e5-b6d0-44fb-bd9e-c91bfefb4d1c';

// COVID Concepts
export const dateSpecimenCollected = '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidTestType = '069f6dfe-88c1-4a45-a894-0d99549c8718';
export const covidOutcome = 'a845f3e6-4432-4de4-9fff-37fa270b1a06';
export const rapidAntigenResultDate = 'af159c77-bc5d-46dd-90d9-bcbffb22267f';
export const pcrTestResultDate = '4a77ab44-0323-490e-96be-e168c0e5c9de';
export const finalCovid19Result = '5da5c21b-969f-41bd-9091-e40d4c707544';
export const covidOutcomesCohortUUID = 'afb0d950-48fd-44d7-ae2c-79615cd125f0';

// Service Enrollment Concepts
export const careAndTreatmentEncounterType = '7e54cd64-f9c3-11eb-8e6a-57478ce139b0';
export const dateOfServiceEnrollmentConcept = '160555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const patientTypeEnrollmentConcept = '83e40f2c-c316-43e6-a12e-20a338100281';
export const studyPopulationTypeConcept = '166432AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const dateOfHIVDiagnosisConcept = '160554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

// Clinical visit
export const clinicalVisitEncounterType = 'cb0a65a7-0587-477e-89b9-cf2fd144f1d4';
export const dateOfEncounterConcept = '163137AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const visitTypeConcept = '8a9809e9-8a0b-4e0e-b1f6-80b0cbbe361b';
export const regimenConcept = 'dfbe256e-30ba-4033-837a-2e8477f2e7cd';
export const expressCareProgramStatusConcept = '159832AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // differentiated Care Services
export const returnVisitDateConcept = '5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // Next Appointment Date

// Encounter types
export const htsRetrospectiveEncounterType = '79c1f50f-f77d-42e2-ad2a-d29304dde2fe';
export const covidCaseAssessmentEncType = '253a43d3-c99e-415c-8b78-ee7d4d3c1d54';
export const covidVaccinationEncType = '5b37ce7a-c55e-4226-bdc8-5af04025a6de';

// HTS Retrospective
export const htsRetrospectiveType = '79c1f50f-f77d-42e2-ad2a-d29304dde2fe';

// Covid Restrospective
//   const covidEncounterUUID = '902839fa-f58c-44a1-95a4-dba62d7263f8'; // Covid Case Report
export const covid_Assessment_EncounterUUID = '253a43d3-c99e-415c-8b78-ee7d4d3c1d54';
export const covidReasonsForTestingConcep_UUID = 'ae46f4b1-c15d-4bba-ab41-b9157b82b0ce'; // Reasons for testing
export const covidTestTypeUUID = '069f6dfe-88c1-4a45-a894-0d99549c8718'; // SARS2-Cov2 Test Type
export const covidTestResultUUID = '3f4ee14b-b4ab-4597-9fe9-406883b63d76'; // Diagnostic PCR Result
export const covidOutcomeUUID = 'a845f3e6-4432-4de4-9fff-37fa270b1a06';

export const covidSpecimenCollectiDate_UUID = '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // Date specimen collected
export const covidPatientStatusUUID = 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f'; // Client Health Status

export const covidTreatementOutConcept_UUID = 'a845f3e6-4432-4de4-9fff-37fa270b1a06';
export const covidSARS_TestResultConcept_UUID = '89feed9c-1dd9-477a-ab1c-86f5f75f6762';

// Covid Assessment
export const covidSARS_TestResult_Name_UUID = '0961651c-d52e-41dd-957a-94b9ce08e4eb';
export const covidReasonsForTestingUUID = '5793ad0f-d726-4918-a1b5-f25f4fb2b857';
export const covidTreatmenOutConceptName_UUID = '28d43e48-3673-4671-a6b1-3ed45fdfcba6';
export const covidSpecimentTestDate_UUID = '499df97a-2a34-4562-946a-3c4d5608b67f';
export const covidTypeofTestConcept_UUID = '069f6dfe-88c1-4a45-a894-0d99549c8718';
export const covidSymptosConcept_UUID = '';
export const covidPresentSymptonsConcept_UUID = '244b0dc0-eb1b-46ae-b62a-f580345d4f46';
export const covidComorbidityPresentConcept_UUID = '166020AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidUnderComorbidityConcept_UUID = '0651869c-6e90-48d6-b25c-406270c76bee';
export const covidPresentSymptonsName_UUID = '12568215-ae1c-42ec-b7e8-8818d2761f46';
export const covidPatientStatusConcept_UUID = 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f';
export const covidEncounterDateTime_UUID = '160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

//Covid Lab Order
export const covidLabOrderDate_UUID = '162078AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidLabOrderEncounterType_UUID = 'a77d3e7f-5c8f-4074-a207-77a70e197b0c';

//Covid Lab Results
export const covidSpecimenCollectionDate_UUID = '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidLabResultsEncounterType_UUID = '253a43d3-c99e-415c-8b78-ee7d4d3c1d54';
export const covidSpecimentTypeConcept_UUID = 'ae127f82-1861-4165-ac81-8554e5a3aac4';
export const covidTestResultConcept_UUID = '161934AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidRapidTestResultDate_UUID = 'af159c77-bc5d-46dd-90d9-bcbffb22267f';
export const covidDiagnosticPcrResult_UUID = '3f4ee14b-b4ab-4597-9fe9-406883b63d76';
export const covidDiagnorticPcrResultDate_UUID = '4a77ab44-0323-490e-96be-e168c0e5c9de';
export const covidTestStatusConcept_UUID = '6681366c-2174-489a-b951-13a1404935bf';
export const covidTestResultDate_UUID = '163724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

// Covid Vaccination
export const covidVaccinationEncounterUUID = '5b37ce7a-c55e-4226-bdc8-5af04025a6de';
export const covidVaccinationStatusUUID = '40cb816f-797b-4cb4-a9fb-2727b2373623'; // Has the patient been vaccinated
export const covidVaccinationStatusConcept_UUID = 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f'; // What is the patient status with regard to COVID-19?
export const covidVaccination1stDoseDateConcept_UUID = 'c85eb064-5ef7-4ac6-8e56-4749bd58df44'; // What is COVID-19 vaccination date (1st dose)?
export const covidVaccination2ndDoseDateConcept_UUID = '42ee7f5c-fdd3-48c1-8d3a-5c6e248e6cb9'; // What is COVID-19 vaccination date (2nd dose)?
export const covidVaccinationTypeConcept_UUID = 'a31d1148-bbcc-4ad6-a015-8359d66bcfdc'; // What COVID-19 vaccine was administered?
export const covidVaccinationAdministeredConcept_UUID = '1410AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // Which date COVID-19 vaccine was administered?
export const covidVaccinationNextVacinationDateConcept_UUID = '5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const covidVaccinationDoseAdmininstered_UUID = '97bf47f9-0ba7-4d00-99bd-8939cd586072';
export const covidVaccineAdministeredConcept_UUID = 'e41fbe17-4aee-4a44-950b-6676d6e0ede2';

// HTS HIV
export const hivTestResultConceptUUID = 'e16b0068-b6a2-46b7-aba9-e3be00a7b4ab';
export const hivTestDateConceptUUID = '140414BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';

// HIV Lab Results
export const hivLabResultsEncounterType_UUID = ' 15272be5-ae9c-4278-a303-4b8907eae73b';
export const hivLabTestResultConcept_UUID = '';
export const hivReasonViralLoadRequest_UUID = '86cc0cfe-bace-4969-94b6-d139f4971d13';
export const hivReasonCD4Request_UUID = '759e89a6-3260-4aee-9922-86a6301bcff3';
export const hivDateViralLoadResult_UUID = '163281AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const hivDateViralLoadInterpretation_UUID = '686dc1b2-68b5-4024-b311-bd2f5e3ce394';
export const hivDateCD4Result_UUID = '159376AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const hivCD4Result_UUID = '657AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
export const hivCD4Count_UUID = '5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
