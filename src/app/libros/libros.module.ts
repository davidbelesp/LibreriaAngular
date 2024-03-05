import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { LibroRoutingModule } from './libros-routing.module';
import { PrimeNGModule } from '../primeng/prime.module';
import { CardLibroComponent } from './components/card-libro/card-libro.component';
import { SharedModule } from '../shared/shared.module';
import { PricetagComponent } from './components/pricetag/pricetag.component';
import { CreateLibroComponent } from './pages/create-libro/create-libro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';



@NgModule({
  declarations: [
    ListPageComponent,
    LayoutPagesComponent,
    LibroPagesComponent,
    CardLibroComponent,
    PricetagComponent,
    CreateLibroComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    PrimeNGModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LibrosModule { }
