import questionsService from '@core/services/questions.service';
import { QuestionActions, QUESTION_ACTION_TYPES } from './types';
import { Dispatch } from 'react';

export const getQuestionAction = (skip: number, take: number) => {
  return async (dispatch: Dispatch<QuestionActions>) => {
    const response: any = await questionsService.getAll(skip, take);
    dispatch({
      type: QUESTION_ACTION_TYPES.GET_ALL_QUESTION,
      payload: {
        results: response?.data?.results,
        total: response?.data?.total,
      },
    });
  };
};



// export const getQuestionAction = (skip: number, take: number) => ({
//   type: QUESTION_ACTION_TYPES.GET_ALL_QUESTION,
//   payload: { skip, take },
// });

// export const getQuestionEpic = (action$: any) => {
//   return action$.pipe(
//     ofType(QUESTION_ACTION_TYPES.GET_ALL_QUESTION),
//     mergeMap((action: any) => {
//       return questionsService.getAll(action.payload.skip, action.payload.take).pipe(
//         map(({ data }: any) => {
//           return {
//             type: QUESTION_ACTION_TYPES.GET_ALL_QUESTION_SUCCESS,
//             payload: {
//               results: data?.results,
//               total: data?.total,
//             },
//           };
//         })
//       );
//     })
//   );
// };
