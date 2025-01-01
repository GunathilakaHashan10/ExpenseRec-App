import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ComponentsModule} from "@app/components/components.module";
import { ActionPanelComponent } from './components/action-panel/action-panel.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ActionPanelComponent,
    ItemTableComponent,
    TableHeaderComponent,
    TableRowComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ],
  exports: []
})
export class DashboardModule {
}
