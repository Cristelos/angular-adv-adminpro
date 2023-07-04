import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'Main', url: '/' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Promesas', url: 'promesas' },
      ]
    }
  ];

  constructor() { }
}
