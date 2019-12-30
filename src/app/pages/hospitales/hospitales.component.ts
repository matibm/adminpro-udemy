import { HospitalService } from './../../services/hospital/hospital.service';
import { Hospital } from './../../models/hospital.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.scss']
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[];
  constructor(
    public _hospitalService: HospitalService
  ) {
    this.hospitales = [];

  }

  ngOnInit() {
    this._hospitalService.cargarHospital().subscribe((resp: any) => {
      
      this.hospitales = resp.hospitales
      console.log(resp);
      
    })
  }



}
