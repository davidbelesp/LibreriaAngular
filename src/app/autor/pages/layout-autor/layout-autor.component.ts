import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from '../../../services/autor.service';
import { Autor } from '../../../interfaces/libreria.interface';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-layout-autor',
  templateUrl: './layout-autor.component.html',
  styles: ``
})
export class LayoutAutorComponent {

  public myForm: FormGroup = this.fb.group({
    newAutor: ["", [
      Validators.required
    ]],
  })

  constructor(
    private fb: FormBuilder,
    private autorService: AutorService
  ){

  }

  saveAutor(): void{
    if(this.myForm.invalid){
      return this.myForm.markAllAsTouched()
    }

    const nuevo = this.myForm.get("newAutor")?.value

    if(nuevo){
      this.autorService.create(this.getAutor(nuevo)).pipe(
        catchError( e => throwError(e)))
    }

    location.reload()
  }

  getAutor(nombre : string): Autor{
    return {Id:0,Nombre:nombre}
  }

}
