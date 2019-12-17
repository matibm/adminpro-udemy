import { ModalUploadService } from './modal-upload.service';
import { SubirArchivoService } from './../../shared/subir-archivo/subir-archivo.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  constructor(public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) {
    console.log("modal listo");

  }

  ngOnInit() {
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return
    }

    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Solor imagenes', "El archivo seleccionado no es una imagen", 'error')
      this.imagenSubir = null
      return
    }

    this.imagenSubir = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  subirImagen() {
    this._subirArchivoService.subirArchivo(this.imagenSubir,
      this._modalUploadService.tipo, this._modalUploadService.id)
      .then(resp => {
        
        console.log(resp);
        
        this._modalUploadService.notificacion.emit(resp);
        //this._modalUploadService.ocultarModal();
        this.cerrarModal();

      }).catch(err => {
        console.log("error en la carga" + err);
        
      })
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();

  }

}
