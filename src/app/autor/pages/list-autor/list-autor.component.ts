import { Component, OnInit } from '@angular/core';
import { Autor } from '../../../interfaces/libreria.interface';
import { AutorService } from '../../../services/autor.service';
import { response } from 'express';

@Component({
  selector: 'app-list-autor',
  templateUrl: './list-autor.component.html',
  styles: ``
})
export class ListAutorComponent implements OnInit{
  public autores : Array<Autor> = [];

  constructor( private autorService: AutorService){}

  ngOnInit(): void {
    this.autorService.getAll()
                    .subscribe(resp => {
                      this.autores = resp.sort((a, b) => (a.Nombre < b.Nombre ? -1 : 1));
                    });
  }

  deleteAutor(id : number | undefined):void{
    this.autorService.deleteById(id!).subscribe(response => console.log(response))
    location.reload();
  }

}
