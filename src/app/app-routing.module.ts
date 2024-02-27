import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [

  {
    path: "libros",
    loadChildren: () => import("./pages/libros/libros.module").then( m => m.LibrosModule)
  },
  {
    path: "autores",
    loadChildren: () => import("./pages/autores/autores.module").then( m => m.AutoresModule)
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "",
    redirectTo: "libros"
  },
  {
    path: "**",
    redirectTo: "404"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
