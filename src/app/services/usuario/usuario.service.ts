import { SubirArchivoService } from './../../shared/subir-archivo/subir-archivo.service';
import { Usuario } from './../../models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;



  constructor(public http: HttpClient,
    public router: Router,
    public _subirArchivo: SubirArchivoService
  ) {
    this.cargarStorage()

  }

  cargarUsuario(desde: number = 0) {
    let url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get(url);
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

  logout() {
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
    } else {
      this.token = '';
      this.usuario = null

    }
  }

  cambiarImagen(archivo: File, id: string) {

    this._subirArchivo.subirArchivo(archivo, 'usuarios', id)
      .then((resp: any) => {
        console.log(resp);
        this.usuario.img = resp.Usuario.img;
        this.guardarStorage(id, this.token, this.usuario)
        Swal.fire('Usuario actualizado', this.usuario.nombre, 'success');
      })
      .catch(resp => {
        console.log(resp);
      });
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

  actualizarUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    return this.http.put(url, usuario).pipe(map((resp: any) => {
      
      if (usuario._id === this.usuario._id) {
        let usuarioDB: Usuario = resp.Usuarios;
        this.guardarStorage(usuarioDB._id, this.token, usuarioDB);    
      }
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado',
        showConfirmButton: true
      });

      return true;
    }));
  }

  buscarUsuarios(termino: string){
   let url = URL_SERVICIOS + '/busqueda/coleccion/usuario/' + termino;
   return this.http.get(url).pipe(map((resp: any) =>{
    return resp.usuarios
     
   }))
  }


  borrarUsusario(id: string){
    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }

}
