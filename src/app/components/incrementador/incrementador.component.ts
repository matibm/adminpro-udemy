import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress',null) txtProgress: ElementRef;

  @Input() progreso: number = 50;

  @Input('nombre') leyenda: string = 'Leyenda';
  
  @Output() cambioValor: EventEmitter<number> = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number){
    console.log("aber si llega a esta wea");
   // let elemenHTML: any = document.getElementsByName('progreso')[0]

    
    if (newValue>= 100) {
      this.progreso = 100;
    }else if (newValue <= 0 ) {
      this.progreso = 0;
    }else{
      this.progreso = newValue
    }

   // elemenHTML.value = Number (this.progreso );

   this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
   
    
  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;

    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0
      return;
    }

    this.progreso = this.progreso + valor

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();

  }
}
