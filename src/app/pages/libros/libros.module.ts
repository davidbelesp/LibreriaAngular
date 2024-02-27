import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroListComponent } from './libro-list/libro-list.component';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { LibrosRoutingModule } from './libros-routing.module';



@NgModule({
  declarations: [
    LibroListComponent,
    CreateLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ],
  exports: [
    LibroListComponent,
    CreateLibroComponent
  ]
})
export class LibrosModule { }
