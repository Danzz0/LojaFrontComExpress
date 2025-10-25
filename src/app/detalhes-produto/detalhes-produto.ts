import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-detalhes-produto',
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-produto.html',
  styleUrls: ['./detalhes-produto.css']
})
export class DetalhesProdutoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private storeService = inject(LojaService);
  
  product: Produto | null = null;
  loading: boolean = true;
  searchId: number | null = null;
  error: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(parseInt(id));
      }
    });
  }

  loadProduct(id: number) {
    this.error = '';
    this.loading = true;
    
    this.storeService.obterProdutoPorId(id).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (error) => {
        console.error('deu errado!', error);
        this.error = 'Não encontrado :( ';
        this.product = null;
        this.loading = false;
      }
    });
  }

  searchById() {
    if (this.searchId) {
      this.router.navigate(['/produto', this.searchId]);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}