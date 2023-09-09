import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "@app/modules/auth/services/auth.service";
import {Router} from "@angular/router";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "@app/modules/auth/store/actions/register.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {ApiResponseInterface} from "@app/shared/types/apiResponse.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.auth('register', request).pipe(
          map((response: ApiResponseInterface) => {
            return registerSuccessAction();
          }),

          catchError((errorResponse : HttpErrorResponse) => {
            const error: ErrorDetailsInterface =  errorResponse.error.error;
            return of(registerFailureAction({error}));
          })
        )
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/signin');
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
