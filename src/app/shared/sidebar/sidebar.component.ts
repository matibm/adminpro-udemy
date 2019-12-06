import { Usuario } from 'src/app/models/usuario.model';
import { SidebarService, UsuarioService } from 'src/app/services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  usuario :Usuario
  constructor(
    public _sidebar: SidebarService,
    public _usuarioService: UsuarioService    
    ) { }

  ngOnInit() {

    this.usuario = this._usuarioService.usuario
  }

}
