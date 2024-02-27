import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoresModule,
    LibrosModule
  ],
  exports:[
    AutoresModule,
    LibrosModule
  ]
})
export class PagesModule { }
