import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { TreeModule } from 'angular-tree-component';
import { ApplicationService } from './services/application.service';
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { Utility } from './services/utility';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    DataFilterPipe,
    DeviceManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    TreeModule,
    DataTableModule,
    ChartsModule,
    HttpModule
  ],
  providers: [ApplicationService, Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
