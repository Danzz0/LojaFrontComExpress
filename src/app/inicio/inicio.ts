import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
  private lojaService = inject(LojaService);
  private router = inject(Router);
  
  prods: Produto[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.loadProducts();
  }
  
  viewDetails(id: number) {
    this.router.navigate(['/produto', id]);
  }
  
  loadProducts() {
    this.lojaService.obterProdutos().subscribe({
      next: (prods) => {
        this.prods = prods;
        this.loading = false;
      },
      error: (error) => {
        console.error('erro ao carregar produtos:', error);
        this.loading = false;
      }
    });
  }

}