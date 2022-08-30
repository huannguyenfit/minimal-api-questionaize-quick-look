const API_PATH = {
  LOGIN: '/connect/token',
  GRAPHQL: '/api/graphql',

  GET_QUESTION: '/api/questions/getall',
  ADD_QUESTION: '/api/questions',

  GET_ASSESSMENT: '/api/assessments/getall',
  ADD_ASSESSMENT_MANUAL: '/api/assessments',
  ADD_ASSESSMENT_AUTO: '/api/assessments-random',

  GET_MY_ASSESSMENT: '/api/employee-assessments/getall',
  READY_TO_START_ASSESSMENT: '/api/employee-assessments/ready-to-start',
  SAVE_ASSESSMENT: '/api/employee-assessments/save-assessment',
  GET_AN_ASSESSMENT: '/api/employee-assessments/get-an-assessment',
}

export default API_PATH;
