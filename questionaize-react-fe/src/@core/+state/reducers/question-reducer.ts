import { StatusCodes } from 'http-status-codes';
import { QuestionActions, QUESTION_ACTION_TYPES } from '../actions/types';

export interface IQuestionState {
  readonly questions: {
    results: [];
    total: number;
  };
}

export const initialState: IQuestionState = {
  questions: {
    results: [],
    total: 0,
  },
};

export const questionReducer = (states = initialState, action: QuestionActions): IQuestionState => {
  switch (action.type) {
    case QUESTION_ACTION_TYPES.GET_ALL_QUESTION_SUCCESS:
      return {
        ...states,
        questions: action.payload,
      };
    default:
      return states;
  }
};
