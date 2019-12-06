import { ImagenPipe } from './imagen.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ImagenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagenPipe]
})
export class PipesModule { }
