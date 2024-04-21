import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../interfaces/producto'; // Define la interfaz Producto según la estructura del JSON
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos: Producto[] = []; // Variable para almacenar los productos después de cargarlos

  constructor(private http: HttpClient) { }

  // Método para cargar los productos y almacenarlos en la variable productos
  cargarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('assets/DatosScraping.json');
  }

  // Método para obtener un producto por su ID
  getProductById(productId: string): Observable<Producto | undefined> {
    // Si los productos no se han cargado, los cargamos
    if (this.productos.length === 0) {
      return this.cargarProductos().pipe(
        // Cuando los productos se carguen, buscamos el producto por su ID
        map(productos => {
          this.productos = productos; console.log(productos);
          // Almacenamos los productos en la variable productos
          return this.productos.find(producto => producto.id === productId); // Buscamos el producto por su Image1
        })
      );
    } else {
      // Si los productos ya están cargados, buscamos el producto por su ID directamente
      return of(this.productos.find(producto => producto.id === productId));
    }
  }
}
