import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progreso1 : number  = 90;
  progreso2: number  = 40;
  constructor() { }

  ngOnInit() {
  }
 
}
