import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html'
})
export class MenubarComponente implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [

      {
        label: 'Inicio',
        icon: PrimeIcons.HOME,
        routerLink: 'home',
      },
      {
        label: 'Libros',
        icon: PrimeIcons.BOOK,
        routerLink: 'libros',
      },
      {
        label: 'Autores',
        icon: PrimeIcons.USER_EDIT,
        routerLink: 'autores',
      },
      {
        label: 'Géneros',
        icon: PrimeIcons.BOOKMARK,
        routerLink: 'temas',
      },
      {
        label: 'Formato',
        icon: PrimeIcons.TH_LARGE,
        routerLink: 'formatos',
      },
      {
        label: 'Edicion',
        icon: PrimeIcons.CLONE,
        routerLink: 'ediciones',
      }
    ];
  }
}
