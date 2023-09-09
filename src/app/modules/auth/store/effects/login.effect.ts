import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {Router} from "@angular/router";
import {AuthService} from "@app/modules/auth/services/auth.service";
import {loginAction, loginFailureAction, loginSuccessAction} from "@app/modules/auth/store/actions/login.action";
import {CurrentUserInterface} from "@app/modules/auth/types/currentUser.interface";
import {PersistenceService} from "@app/services/persistence.service";
import {ApiResponseInterface} from "@app/shared/types/apiResponse.interface";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";
import {HttpErrorResponse} from "@angular/common/http";


@Injectable()
export class LoginEffect {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((response: ApiResponseInterface) => {
            const currentUser: CurrentUserInterface = response.data;
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            const error: ErrorDetailsInterface =  errorResponse.error.error;
            return of(loginFailureAction({error}));
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/signup');
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router) {
  }

}
