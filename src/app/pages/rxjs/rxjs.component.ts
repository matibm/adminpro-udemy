import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'

})
export class RxjsComponent implements OnInit {

  constructor() {

    let obs = new Observable(observer => {
      let numero = 0;
      let intervalo = setInterval(() => { 
        numero +=1;
        observer.next(numero);
        if (numero ===3 ) {
          //clearInterval(intervalo); 
          observer.complete();
          
        }
      }, 1000)
    })

    obs.pipe(
      retry(2 )
    )

    obs.subscribe(
      numero => console.log(numero), 
      error => console.error(error),
      () => ('se completo la suscripcion')    

    )
  }

  ngOnInit() {
  }

}
