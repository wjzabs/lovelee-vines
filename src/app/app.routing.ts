import { RegisterUserComponent } from '../abs/users/register-user/register-user.component';
import { SignInComponent } from '../abs/users/sign-in/sign-in.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { WineMaintComponent } from './wine-maint/wine-maint.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'vines', component: AuthenticatedUserComponent, canActivate: [AuthGuard], 
    children: [
      {path: '', canActivateChild: [AuthGuard],
      children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
      //  {path: 'wines', component: WinesComponent},
        {path: 'wine-list/:count', component: WineListComponent},
        {path: 'wine-detail/:id/:operation', component: WineDetailComponent},
        {path: 'wine-maint', component: WineMaintComponent},
        {path: 'settings', component: SettingsComponent}
      ] }
    ]},
  {path: '', component: SignInComponent},
  {path: '**', component: SignInComponent}
];