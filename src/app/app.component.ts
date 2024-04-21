import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app/services/producto-service.service'; // Ajusta la ruta de importación según la ubicación de tu servicio
import { Producto } from '../app/interfaces/producto';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
export interface CustomPaginatorState {
  first?: number; // Marca la propiedad como opcional para permitir valores undefined
  rows?: number;
  // otras propiedades que pueda tener PaginatorState, si es necesario
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'adidas3';
  productos: Producto[] = [];
  responsiveOptions: any[] | undefined;
  items_breadcumbs: MenuItem[] | undefined;
  ratingValue: number | null = null;
  totalRecords: number = this.productos.length; // El total de productos
  first: number = 0;
  rows: number = 20;
 
  
  constructor(private productService: ProductService, private router: Router) { }
 
  ngOnInit(): void {
    this.productService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
        this.ratingValue = this.productos[0].Reviews.rating
        console.log(this.productos[0].Reviews.rating); // Verifica los datos en la consola
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
  }

