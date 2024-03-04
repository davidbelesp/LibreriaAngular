import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Autor, Edicion, Formato, Libro, Tema } from '../../../interfaces/libreria.interface';
import { FormatoService } from '../../../services/formato.service';
import { TemaService } from '../../../services/tema.service';
import { AutorService } from '../../../services/autor.service';
import { EdicionService } from '../../../services/edicion.service';


@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrl: './create-libro.component.css'
})
export class CreateLibroComponent {

  private libro?: Libro;
  public formatos?: Formato[]
  public temas?: Tema[]
  public autores?: Autor[]
  public ediciones?: Edicion[]
  public url? : string;

  constructor(
    private fb: FormBuilder,
    private formatoService: FormatoService,
    private temaService: TemaService,
    private autorService: AutorService,
    private edicionService: EdicionService
  ) { }

  public myForm: FormGroup = this.fb.group({
    isbn: ["0000000000000", [
      Validators.required,
      Validators.maxLength(13),
      Validators.minLength(13),
      Validators.pattern("[1-9]{13}$")
    ]],
    edicion: ["",
      Validators.required
    ],
    precio: [0,
      Validators.required
    ],
    cantidad: [0,
      Validators.required
    ],
    titulo: ["",
      Validators.required
    ],
    url: ["",
      Validators.required
    ],
    autor: ["",
      Validators.required
    ],
    formato: ["",
      Validators.required
    ],
    tema: ["",
      Validators.required
    ]
  })


  onSave(): void {
    if (this.myForm.invalid) {

      this.myForm.markAllAsTouched()
      return console.log(this.myForm.controls)

    }

    this.libro = this.myForm.value as Libro
    console.log(this.libro)

  }

  ngOnInit(): void {
    this.formatoService.getAll().subscribe(resp => {
      this.formatos = resp;

      this.autorService.getAll().subscribe(resp => {
        this.autores = resp;

        this.temaService.getAll().subscribe(resp => {
          this.temas = resp;

          this.edicionService.getAll().subscribe(resp => {
            this.ediciones = resp;
          })
        })
      })
    })
  }

  setUrl(target : Event): void{
    if(target.target as HTMLInputElement != null){
      this.url = (target.target as HTMLInputElement).value
    }
  }



}
