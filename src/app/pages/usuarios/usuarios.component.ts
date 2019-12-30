import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = false;

  constructor(public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService
    ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(resp => this.cargarUsuarios());
  }

  mostrarModal(id: string){
    
    this._modalUploadService.mostrarModal('usuarios', id)

  }

  cargarUsuarios() {
  //  this.cargando = true;
    this._usuarioService.cargarUsuario(this.desde).subscribe((resp: any) => {
     // console.log(resp);
      this.totalRegistros = resp.totalUsuarios;
      this.usuarios = resp.Usuarios
    //  this.cargando = false;
    })
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor
   // console.log(desde);

    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {
    if (termino.length<=0) {
      this.cargarUsuarios();
      return;
    }
    this._usuarioService.buscarUsuarios(termino).subscribe( (usuarios) => {
      
      this.usuarios = usuarios
      
    })
  }

  borrarUsuario(usuario:Usuario){
    if (usuario._id === this._usuarioService.usuario._id) {
      Swal.fire( 'No se puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "Está a punto de borrar a " + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this._usuarioService.borrarUsusario(usuario._id).subscribe(resp=>{
          this.cargarUsuarios();
          if (!this.usuarios[1]) {
            this.cambiarDesde(-5);  
          }
          Swal.fire(
            'Eliminado!',
            'El usuario se eliminó correctamente.',
            'success'
          )
        });    
      }
    })
  }

  guardarUsuario(usuario: Usuario){
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }
}
