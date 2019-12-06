
import { LoginGuardGuard } from './guards/login-guard.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SubirArchivoService,
  SettingsService,
  SidebarService,
  SharedService
} from 'src/app/services/service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    LoginGuardGuard,
    SubirArchivoService
  ]
})
export class ServiceModule { }
