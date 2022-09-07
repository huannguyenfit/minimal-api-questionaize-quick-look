import { questionReducer } from './reducers/question-reducer';
import { combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


//combine Reducer
export const rootReducer = combineReducers({
  questions: questionReducer,
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppState = ReturnType<typeof rootReducer>;
