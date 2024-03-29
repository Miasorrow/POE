import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoeService } from '../services/poe.service';

@Component({
  selector: 'app-add-poe',
  templateUrl: './add-poe.component.html',
  styleUrl: './add-poe.component.scss'
})
export class AddPoeComponent {
  public poeForm: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _poeService: PoeService,
    private _router: Router
  ) {}


  ngOnInit(): void{ 
    this.poeForm = this._formBuilder.group({
      namepoe: [
        '',//Default Value
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      duration: [
        '',
        [
          Validators.required,
        ]
      ]
    })
  }


  onSubmit(): void {
    this._poeService.add(this.poeForm.value)
       this._router.navigate(['/poe-home'])
      
    

  }

}
