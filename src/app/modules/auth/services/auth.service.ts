import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {LoginRequestInterface} from "@app/modules/auth/types/loginRequest.interface";
import {environment} from "src/environments/environment";
import {ApiResponseInterface} from "@app/shared/types/apiResponse.interface";
import {RegisterRequestInterface} from "@app/modules/auth/types/registerRequest.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) {
  }

  login(data: LoginRequestInterface): Observable<ApiResponseInterface> {
    const url: string = environment.apiUrl + '/api/auth/login';
    return this.http
      .post<ApiResponseInterface>(url, data)
      .pipe(map((response: ApiResponseInterface) => response));
  }

  register(data: RegisterRequestInterface): Observable<ApiResponseInterface> {
    const url: string = environment.apiUrl + '/api/auth/register';
    return this.http
      .post<ApiResponseInterface>(url, data)
      .pipe(map((response: ApiResponseInterface) => response));
  }

  auth(path: string, data: RegisterRequestInterface | LoginRequestInterface): Observable<ApiResponseInterface> {
    const url: string = environment.apiUrl + `/api/auth/${path}`;
    return this.http
      .post<ApiResponseInterface>(url, data)
      .pipe(map((response: ApiResponseInterface) => response));
  }
}
