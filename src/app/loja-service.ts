import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private APIURL = 'http://localhost:3000'
  private http = inject(HttpClient)

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.APIURL}/produtos`)
  }

  obterProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.APIURL}/produtos/${id}`)
  }
}
