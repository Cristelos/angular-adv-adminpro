import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();

  //Inyectamos mi servicio
  constructor(private settingsService: SettingsService){}

  ngOnInit(): void {
    customInitFunctions();
  }
}
