import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any> 
  }  = { defaultOptions: [], accessLink: [] }
  

  customOptions: Array<any> = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites']
      }
    ]
  }
}
