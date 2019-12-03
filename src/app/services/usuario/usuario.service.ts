import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;



  constructor(public http: HttpClient,
    public router: Router
    ) {
    this.cargarStorage()

  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }
  estaLogueado() {
    return (this.token.length > 5) ? true : false
  }

  logout(){
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login')
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, { token }).pipe(map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true
    }))

  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
      .pipe(map((resp: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Tu Perfil se creo correctamente',
          text: 'Tu correo: ' + usuario.email,
          showConfirmButton: false,
          timer: 5000
        })
        return resp.usuario;
      }))
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null

    }
  }

  login(usuario: Usuario, recordarme: boolean) {

    if (recordarme) {
      localStorage.setItem('email', usuario.email);


    } else {
      localStorage.removeItem('email')


    }


    let url = URL_SERVICIOS + '/login'
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario)

      return true
    }))
  }

}
