import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutoresRoutingModule } from './autores-routing.module';



@NgModule({
  declarations: [
    AutorListComponent,

  ],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ],
  exports:[
    AutorListComponent,
  ]
})
export class AutoresModule { }
