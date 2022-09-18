import { combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});

export default store
