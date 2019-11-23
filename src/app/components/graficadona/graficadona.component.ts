import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styleUrls: ['./graficadona.component.scss']
})
export class GraficadonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') doughnutChartData: number[] = [];
  @Input('type') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
 