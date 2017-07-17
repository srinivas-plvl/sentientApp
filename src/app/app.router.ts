import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceManagementComponent } from './device-management/device-management.component';

export const router: Routes=[
     { path:'', component: DashboardComponent},
     { path:'devicemanagement', component: DeviceManagementComponent},
     { path:'dashboard', component: DashboardComponent}
     
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);