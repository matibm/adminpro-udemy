import { URL_SERVICIOS } from 'src/app/config/config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from './../models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  cargarPost(){
    let url = URL_SERVICIOS + '/post';
    return this.http.get(url);
  }
}
