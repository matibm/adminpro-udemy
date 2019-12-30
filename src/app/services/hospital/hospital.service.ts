import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hospital } from './../../models/hospital.model';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  hospital: Hospital;
  constructor(
    public http :HttpClient,
    public router: Router

    ) { }

    cargarHospital(){
      let url = URL_SERVICIOS + '/hospital';
      return this.http.get(url);
    }

}
