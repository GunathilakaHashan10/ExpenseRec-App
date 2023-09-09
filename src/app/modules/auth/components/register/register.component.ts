import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {EMPTY_STRING} from "@app/shared/utils/string.util";
import {RegisterFormErrorInterface} from "@app/modules/auth/types/registerFormError.interface";
import {Observable} from "rxjs";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";
import {select, Store} from "@ngrx/store";
import {errorSelector, isSubmittingSelector} from "@app/modules/auth/store/selectors";
import {RegisterRequestInterface} from "@app/modules/auth/types/registerRequest.interface";
import {registerAction} from "@app/modules/auth/store/actions/register.action";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    email: [EMPTY_STRING, [Validators.email]],
    username: [EMPTY_STRING],
    password: [EMPTY_STRING],
    confirmPassword: [EMPTY_STRING]
  });
  public formError: RegisterFormErrorInterface = {
    email: {hasError: false, error: EMPTY_STRING},
    username: {hasError: false, error: EMPTY_STRING},
    password: {hasError: false, error: EMPTY_STRING},
    confirmPassword: {hasError: false, error: EMPTY_STRING},
    register: {hasError: false, error: EMPTY_STRING}
  }
  public hasBackendError: boolean = false;
  isSubmitting$?: Observable<boolean>;
  error$?: Observable<ErrorDetailsInterface>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
    this.error$?.subscribe(errorDetails => {
      this.hasBackendError = errorDetails != null;
    });
  }

  onEmailChange(): void {
    this.formError = {
      ...this.formError,
      email: {hasError: false, error: EMPTY_STRING},
      register: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }

  onUsernameChange(): void {
    this.formError = {
      ...this.formError,
      username: {hasError: false, error: EMPTY_STRING},
      register: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }

  onPasswordChange(): void {
    this.formError = {
      ...this.formError,
      password: {hasError: false, error: EMPTY_STRING},
      register: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }

  onConfirmPasswordChange(): void {
    this.formError = {
      ...this.formError,
      confirmPassword: {hasError: false, error: EMPTY_STRING},
      register: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }

  onSubmit(): void {
    const {email, username, password, confirmPassword} = this.form.value;
    if (email == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        email: {
          error: 'email is required',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    } else if (this.form.get('email')?.hasError('email')) {
      this.formError = {
        ...this.formError,
        email: {
          error: 'email is not valid',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    }


    if (username == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        username: {
          error: 'username is required',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    }

    if (password == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        password: {
          error: 'password is required',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    }

    if (confirmPassword == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        confirmPassword: {
          error: 'confirm password is required',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    }

    if (confirmPassword != EMPTY_STRING && confirmPassword != password) {
      this.formError = {
        ...this.formError,
        confirmPassword: {
          error: 'confirm password is mismatched',
          hasError: true
        },
        register: {hasError: true, error: EMPTY_STRING}
      }
    }

    if (this.formError.register.hasError) {
      return;
    }

    const request: RegisterRequestInterface = this.form.value;
    this.store.dispatch(registerAction({request}));
  }

}
