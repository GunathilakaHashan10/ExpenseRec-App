import {CurrentUserInterface} from "@app/modules/auth/types/currentUser.interface";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

export interface AuthStateInterface {
  isSubmitting: boolean,
  currentUser: CurrentUserInterface | null,
  isLoggedIn: boolean | null,
  error: ErrorDetailsInterface | null
}
