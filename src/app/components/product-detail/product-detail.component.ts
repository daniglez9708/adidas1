import { Component } from '@angular/core';
import { ProductService } from '../../services/producto-service.service';
import { data } from 'autoprefixer';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  imageUrl: string | undefined;
  productos: Producto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductImage();
  }

  getProductImage(): void {
    this.productService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        this.imageUrl = this.productos[0].Image1
      },
      error => {
        console.error(error); // Maneja cualquier error que ocurra
      }
    );
  }
}
