import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'produto/:id', component: DetalhesProdutoComponent },
  { path: '**', redirectTo: '' }
];