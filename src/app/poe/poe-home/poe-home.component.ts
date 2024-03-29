import { Component } from '@angular/core';
import { PoeType } from '../types/poe-type';
import { PoeService } from '../services/poe.service';
import { ParsedPropertyType } from '@angular/compiler';
import { __disposeResources } from 'tslib';

@Component({
  selector: 'app-poe-home',
  templateUrl: './poe-home.component.html',
  styleUrl: './poe-home.component.scss'
})
export class PoeHomeComponent {
  public poes: PoeType[] = []

  constructor(
    private _poe: PoeService
  ) {}
  ngOnInit(): void{


  this.poes = this._poe.poes

  console.log(this._poe.poes)

  }

}
