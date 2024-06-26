import { Component } from '@angular/core';
import { Intern } from './types/intern.type';
import { InternService } from './services/intern.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

//! interns : attribut ou varible de class ou propriété
//! type tableau de any donc de tout


export class HomeComponent {
  /**
   * @var Array<Intern>
   * Array of Intern to be displayed
   */
  interns: Array<Intern> = []
  constructor(
    private _service: InternService
  ) {}

  ngOnInit(): void{
    this._service.findAll()
      .pipe(
        take(1)
        
      )
      .subscribe((interns: Intern[]) => {
        this.interns = interns 
      }) 
  }
}
