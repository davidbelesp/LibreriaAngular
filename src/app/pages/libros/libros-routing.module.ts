import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibroListComponent } from './libro-list/libro-list.component';
import { CreateLibroComponent } from './create-libro/create-libro.component';


const routes: Routes = [
  { path: '', component: LibroListComponent },
  { path: 'create', component: CreateLibroComponent },
  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule {}
