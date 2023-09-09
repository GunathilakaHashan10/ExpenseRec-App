import {FormFieldErrorInterface} from "@app/modules/auth/types/formFieldError.interface";

export interface RegisterFormErrorInterface {
  email: FormFieldErrorInterface,
  username: FormFieldErrorInterface,
  password: FormFieldErrorInterface,
  confirmPassword: FormFieldErrorInterface,
  register: FormFieldErrorInterface
}
