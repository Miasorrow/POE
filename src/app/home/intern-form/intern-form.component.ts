import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternService } from '../services/intern.service';
import { Intern } from '../types/intern.type';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss'
})
export class InternFormComponent {
  public interForm: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _router: Router
  ) {}


  ngOnInit(): void{ 
    this.interForm = this._formBuilder.group({
      lastname: [
        '',//Default Value
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      firstname: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }


  onSubmit(): void {
    this._internService.add(this.interForm.value)
      .subscribe((intern:Intern)=>{
        this._router.navigate(['/home'])
      })
    

  }
}
