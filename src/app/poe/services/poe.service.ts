import { Injectable } from '@angular/core';
import { PoeType } from '../types/poe-type';


@Injectable({
  providedIn: 'root'
})
export class PoeService {
  private _poes: Array<PoeType> = [
    {
      namepoe: 'CyberSécurité',
      duration: 399
      
    }
  ]

  constructor() { }

  add(poe:PoeType){
    
    this.poes.push(poe)
  }


  get poes(): Array<PoeType>{
    return this._poes
  }

}


