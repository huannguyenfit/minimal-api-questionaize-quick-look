import { questionReducer } from './reducers/question-reducer';
import { combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getQuestionEpic } from './actions/question-action';

//combine Reducer
export const rootReducer = combineReducers({
  questions: questionReducer,
});



// reducer and Epic
const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  getQuestionEpic
);

epicMiddleware.run(rootEpic);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))
epicMiddleware.run(rootEpic);

export type AppState = ReturnType<typeof rootReducer>;
