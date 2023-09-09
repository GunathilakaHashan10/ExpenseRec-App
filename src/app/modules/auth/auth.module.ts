import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {AuthRoutingModule} from '@app/modules/auth/auth-routing.module';
import {LoginComponent} from '@app/modules/auth/components/login/login.component';
import {RegisterComponent} from '@app/modules/auth/components/register/register.component';
import {reducers} from "@app/modules/auth/store/reducers";
import {AuthService} from "@app/modules/auth/services/auth.service";
import {LoginEffect} from "@app/modules/auth/store/effects/login.effect";
import {PersistenceService} from "@app/services/persistence.service";
import {RegisterEffect} from "@app/modules/auth/store/effects/register.effect";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, RegisterEffect])
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})
export class AuthModule {
}
