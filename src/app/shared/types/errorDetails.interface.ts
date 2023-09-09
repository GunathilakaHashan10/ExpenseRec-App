import {ValidationErrorInterface} from "@app/shared/types/validationError.interface";

export interface ErrorDetailsInterface {
  code: string,
  message: string,
  details: string | null,
  errors: [ValidationErrorInterface] | null
}
