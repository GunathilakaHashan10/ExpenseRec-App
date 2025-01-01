import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExrButtonComponent} from "@app/components/exr-button/exr-button.component";



@NgModule({
  declarations: [
    ExrButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExrButtonComponent
  ]
})
export class ComponentsModule { }
