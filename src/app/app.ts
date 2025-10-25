import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LojaService } from './loja-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Loja';

  loja = inject(LojaService)
  constructor() {
    this.loja.obterProdutos().subscribe(res => {
      console.log(res)
    })
  }
}
