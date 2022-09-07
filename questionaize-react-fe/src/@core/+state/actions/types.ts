export enum QUESTION_ACTION_TYPES {
  GET_ALL_QUESTION = 'GET_ALL_QUESTION',
  GET_ALL_QUESTION_SUCCESS = 'GET_ALL_QUESTION_SUCCESS',
}

export interface GetQuestionActions {
  type: QUESTION_ACTION_TYPES.GET_ALL_QUESTION;
  payload: {
    results: any;
    total: number;
  };
}

export type QuestionActions = GetQuestionActions;
