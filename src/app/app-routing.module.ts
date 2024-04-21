import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', component: ListaProductosComponent } ,
  { path: 'prueba', component: ProductDetailComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
