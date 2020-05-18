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
    case LOGIN_FAILED:
    // return the next state
    default:
      return state;
  }
}