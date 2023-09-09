import {createAction, props} from "@ngrx/store";

import {ActionTypes} from "@app/modules/auth/store/actionTypes";
import {RegisterRequestInterface} from "@app/modules/auth/types/registerRequest.interface";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: ErrorDetailsInterface }>()
);
