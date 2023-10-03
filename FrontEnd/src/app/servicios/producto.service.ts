import {EnvironmentInjector ,Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/'
  }

  getListaProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.myAppUrl +this.myApiUrl)
  }

  eliminarProducto(id: number) : Observable<void> {
    return this.http.delete<void>((this.myAppUrl +this.myApiUrl)+id)
  }

  agregarProducto(producto: Producto) : Observable<void>{
    return this.http.post<void>(this.myAppUrl +this.myApiUrl, producto)
  }

  getProducto(id: number) : Observable<Producto>{
    return this.http.get<Producto>((this.myAppUrl +this.myApiUrl)+id)
  }

  updateProducto (id : number,producto: Producto) : Observable<void>{
    return this.http.put<void>((this.myAppUrl +this.myApiUrl)+id, producto)
  }
}
