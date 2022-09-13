
import { combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'


//combine Reducer
export const rootReducer = combineReducers({});


// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  
})


export type AppState = ReturnType<typeof rootReducer>;
