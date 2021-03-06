import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from './../pipes/pipes.module';
import { GraficadonaComponent } from './../components/graficadona/graficadona.component';
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { PAGES_ROUTES } from './pages.route';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficadonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        HospitalesComponent,
        PostComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        CommonModule
    ]
})
export class PagesModule { }
