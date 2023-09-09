import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {LoginFormErrorInterface} from "@app/modules/auth/types/loginFormError.interface";
import {EMPTY_STRING} from "@app/shared/utils/string.util";
import {loginAction} from "@app/modules/auth/store/actions/login.action";
import {errorSelector, isSubmittingSelector} from "@app/modules/auth/store/selectors";
import {LoginRequestInterface} from "@app/modules/auth/types/loginRequest.interface";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    username: [EMPTY_STRING],
    password: [EMPTY_STRING]
  });
  public formError: LoginFormErrorInterface = {
    username: {hasError: false, error: EMPTY_STRING},
    password: {hasError: false, error: EMPTY_STRING},
    login: {hasError: false, error: EMPTY_STRING}
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

  onUsernameChange(): void {
    this.formError = {
      ...this.formError,
      username: {hasError: false, error: EMPTY_STRING},
      login: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }
  onPasswordChange(): void {
    this.formError = {
      ...this.formError,
      password: {hasError: false, error: EMPTY_STRING},
      login: {hasError: false, error: EMPTY_STRING}
    }
    this.hasBackendError = false;
  }

  onSubmit(): void {
    const {username, password} = this.form.value;
    if (username == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        username: {
          error: 'username is required',
          hasError: true
        },
        login: {hasError: true, error: EMPTY_STRING}
      }
    }

    if (password == EMPTY_STRING) {
      this.formError = {
        ...this.formError,
        password: {
          error: 'password is required',
          hasError: true
        },
        login: {hasError: true, error: EMPTY_STRING}
      }
    }

    if( this.formError.login.hasError ) {
      return;
    }

    const request: LoginRequestInterface = this.form.value
    this.store.dispatch(loginAction({request}));
  }

}
