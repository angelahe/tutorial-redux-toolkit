import {
    configureStore,
    getDefaultMiddleware,
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  const loginSuccess = createAction("LOGIN_SUCCESS");
  const loginFailed = createAction("LOGIN_FAILED");
  
  const authState = {
    token: "",
    error: "",
  };
  
  const authReducer = createReducer(authState, {
    [loginSuccess]: (state, action) => {
      // return the next state
      state.token = action.payload;
    },
    [loginFailed]: (state, action) => {
      // return the next state
      state.error = action.payload;
    },
  });