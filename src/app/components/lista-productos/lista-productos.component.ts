import { Component } from '@angular/core';
import { ProductService } from '../../services/producto-service.service'; // Ajusta la ruta de importación según la ubicación de tu servicio
import { Producto } from '../../interfaces/producto';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  responsiveOptions: any[] | undefined;
  items_breadcumbs: MenuItem[] | undefined;
  ratingValue: number | null = null;
  totalRecords: number = this.productos.length; // El total de productos
  first: number = 0;
  rows: number = 20;
  items: MenuItem[] | undefined;
  itemss: MenuItem[] | undefined;

  
  constructor(private productService: ProductService, private router: Router) { }
 
  ngOnInit(): void {
    this.items = [
      { label: "All Men's Shoes" },
      { label: "Sneakers" },
      { label: "Running" },
      { label: "Soccer" },
      { label: "Walking" },
      { label: "Slides & Sandals" },
      { label: "Trail Running" },
      { label: "Workout & Gym" },
      { label: "Shoes $100 & Und" }
    ];
    this.itemss = [
      { label: "All Men's Shoes" },
      { label: "Sneakers" }
    ];
    this.productService.cargarProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        console.log(data);
        
        this.ratingValue = this.productos[0].Reviews.rating
      },
      error => {
        console.error(error); // Maneja cualquier error que ocurra
      }
    );
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.items_breadcumbs = [{ label: 'Back' }, { label: 'Home' }, { label: 'Men' }, { label: 'Shoes' }];
}
onRatingChange(event: Event) {
  this.ratingValue = (event.target as any).value;
}
navigateToProduct() {
  this.router.navigateByUrl('/prueba');
}
redirectToProduct(productUrl: string) {
  console.log(productUrl);
  
  if (productUrl) {
    // Redirigir a la página de detalle del producto con el productId como parámetro
    this.router.navigate(['/prueba', productUrl]);
  }
}


}
