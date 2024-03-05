import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-layout-tema',
  templateUrl: './layout-tema.component.html',
  styles: ``
})
export class LayoutTemaComponent {

  public myForm: FormGroup = this.fb.group({
    newTema: ["", [
      Validators.required
    ]],
  })

  constructor(
    private fb: FormBuilder,
    private temaService: TemaService
  ){

  }

  saveTema(): void{
    if(this.myForm.invalid){
      return this.myForm.markAllAsTouched()
    }

    const nuevo = this.myForm.get("newTema")?.value

    if(nuevo){
      this.temaService.create(nuevo)
    }
  }


}
