import {Action, createReducer, on} from "@ngrx/store";

import {AuthStateInterface} from "../types/authState.interface";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from "./actions/login.action";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "@app/modules/auth/store/actions/register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  error: null
}

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      error: null
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: null,
      error: action.error
    })
  ),

  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    registerSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: null
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: null,
      error: action.error
    })
  ),
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
