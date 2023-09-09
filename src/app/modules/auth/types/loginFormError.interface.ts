import {FormFieldErrorInterface} from "./formFieldError.interface";

export interface LoginFormErrorInterface {
  username: FormFieldErrorInterface,
  password: FormFieldErrorInterface,
  login: FormFieldErrorInterface
}

