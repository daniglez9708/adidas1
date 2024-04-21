import { Component } from '@angular/core';
import { ProductService } from '../../services/producto-service.service';
import { data } from 'autoprefixer';
import { Producto } from '../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { UndoIcon } from 'primeng/icons/undo';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productos: Producto[] = [];
  product: any;
  productId: string | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      if (this.productId !== null) {
        this.getProductDetails(this.productId);
      }
    });
    
    
  }

  getProductDetails(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (data: any) => {
        this.product = data;
      },
      error => {
        console.log('Error fetching product details:', error);
      }
    );
  }
}
