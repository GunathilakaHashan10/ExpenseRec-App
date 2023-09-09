import {createAction, props} from "@ngrx/store";

import {ActionTypes} from "@app/modules/auth/store/actionTypes";
import {LoginRequestInterface} from "@app/modules/auth/types/loginRequest.interface";
import {CurrentUserInterface} from "@app/modules/auth/types/currentUser.interface";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: ErrorDetailsInterface }>()
);
