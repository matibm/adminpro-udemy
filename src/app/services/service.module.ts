import { LoginGuardGuard } from './guards/login-guard.guard';
import { SettingsService, SidebarService, SharedService } from 'src/app/services/service.index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


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
    LoginGuardGuard
  ]
})
export class ServiceModule { }
