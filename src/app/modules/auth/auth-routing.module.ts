import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from "./auth.component";
import {LoginComponent} from "@app/modules/auth/components/login/login.component";
import {RegisterComponent} from "@app/modules/auth/components/register/register.component";

const routes: Routes = [
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
