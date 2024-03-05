import { Libro } from './../../../interfaces/libreria.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../services/libro.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-libro-pages',
  templateUrl: './libro-pages.component.html',
  styles: ``
})
export class LibroPagesComponent implements OnInit{
  @Input()
  public libro!: Libro;

  constructor(
    private activatedRoute : ActivatedRoute,
    private libroService: LibroService,
    private router : Router,
  ){
    this.activatedRoute.params.pipe(switchMap( params => this.libroService.getByID(params['isbn'])))
    .subscribe( resp =>{this.libro= resp[0];})
  }

  ngOnInit(): void {
  }

  public borrarLibro(){
    console.log(this.libro)
    if(confirm(`Estás seguro que quieres eliminar [ ${this.libro.Titulo} ]`)){
      this.libroService.delete(this.libro.ISBN).subscribe(resp=>{

        if(resp) alert("Libro eliminado")

        console.log(resp)
        this.router.navigate(["../"])
      }
      );
    }
  }



}
