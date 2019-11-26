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
        RxjsComponent

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
        ChartsModule
        
    ]
})
export class PagesModule { }
