import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    SidebarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
