import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "@app/shared/types/appState.interface";
import {AuthStateInterface} from "@app/modules/auth/types/authState.interface";

export const authFeatureSelector = ( state: AppStateInterface ) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.error
);
