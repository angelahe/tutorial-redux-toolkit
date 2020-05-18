// NAMED ACTIONS AND ACTION CREATORS
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

function loginFailed(payload) {
  return { type: LOGIN_FAILED, payload };
}

// Reducer
const authState = {
  token: "",
  error: "",
};

function authReducer(state = authState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    // return the next state
      return { ...state, token: action.payload };
    case LOGIN_FAILED:
    // return the next state
      return { ...state, error: action.payload };
    default:
      return state;
  }
}