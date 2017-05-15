import { AuthGuard } from './services/auth-guard.service';
import { UserApi } from 'abs/users/user-api';
import { UserService } from './services/user.services';
import { appRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AbsModule } from '../abs/abs.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineMaintComponent } from './wine-maint/wine-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { AppDataService } from "app/services/app-data.service";
import { WinePanelComponent } from './panels/wine-panel/wine-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

// import * as mdc from '../../node_modules/material-components-web';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    WineDetailComponent,
    WineListComponent,
    WineMaintComponent,
    AuthenticatedUserComponent,
    WinePanelComponent,
    ImagePanelComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AbsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // UserService, <- is equivalent and shorthand for:
    { provide: UserService, useClass: UserService},  
    // useExisting is to use the same instance that is already created above
    { provide: UserApi, useExisting: UserService},
    AuthGuard,
    AppDataService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
