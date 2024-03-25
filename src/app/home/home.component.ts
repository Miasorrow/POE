import { Component } from '@angular/core';
import { Intern } from './types/intern.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

//! interns : attribut ou varible de class ou propriété
//! type tableau de any donc de tout


export class HomeComponent {
  public interns: Array <Intern> = [
    {
      lastname:'ARNAUD',
      firstname: 'Manon'
    },
    {
      lastname: 'la morte',
      firstname: 'Manon'
    }
  ]
}
