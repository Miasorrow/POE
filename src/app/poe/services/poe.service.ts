import { Injectable } from '@angular/core';
import { PoeType } from '../types/poe-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  constructor(
    private _httpClient: HttpClient
  ) { }

  add(poe: PoeType): Observable <PoeType[]> {
    return this._httpClient.post<PoeType[]>(
      'http://localhost:3000/poe',
      poe
    )
  }

  findAll(): Observable <PoeType[]> {
    return this._httpClient.get<PoeType[]>(
      'http://localhost:3000/poe'
      
    )

  }

  get poes(): Array<PoeType> {
    return this._poes
  }

}

//this.poes.push(poe)

