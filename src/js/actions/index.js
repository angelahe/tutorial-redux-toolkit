import { createStore, combineReducers, applyMiddleware, compose } from "redux";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// NAMED ACTIONS AND ACTION CREATORS
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const FETCH_LINKS_REQUEST = "FETCH_LINKS_REQUEST";
const FETCH_LINKS_SUCCESS = "FETCH_LINKS_SUCCESS";

function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

function fetchLinksRequest() {
  return { type: FETCH_LINKS_REQUEST };
}

function fetchLinksSuccess(payload) {
  return { type: FETCH_LINKS_SUCCESS, payload };
}

//

const middleware = [
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

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleware))
);