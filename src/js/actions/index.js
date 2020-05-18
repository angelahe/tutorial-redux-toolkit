import {
    configureStore,
    getDefaultMiddleware,
    createAction,
  } from "@reduxjs/toolkit";
  
  const loginSuccess = createAction("LOGIN_SUCCESS");
  const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
  const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");
  
  const middleware = [
    getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];
  
  // AUTH STATE
  const authState = {
    token: "",
  };
  
  function authReducer(state = authState, action) {
    // DO STUFF
    return state;
  }
  
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware,
  });