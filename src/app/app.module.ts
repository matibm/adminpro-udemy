
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Rutas 
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
 
// Servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { RegisterComponent } from './login/register.component';
import { GraficadonaComponent } from './components/graficadona/graficadona.component';
import { SettingsService } from './services/service.index';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
     RegisterComponent
     
     
  ],
  imports: [
    BrowserModule,
    APP_ROUTES, 
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
