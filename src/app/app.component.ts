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
export class AppComponent {
  title = 'adidas';
  }

