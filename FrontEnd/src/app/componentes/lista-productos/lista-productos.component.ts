import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  listaProductos: Producto[] = []
  cargador: boolean = false;

  constructor(private _productoServicio: ProductoService, private toastr: ToastrService){

  }

  ngOnInit(): void{
    this.getListaProductos()
  }

  getListaProductos(){
    this.cargador = true;
    this._productoServicio.getListaProductos().subscribe( (data : Producto[]) => {
      this.listaProductos=data
      this.cargador = false;

    })
  }

  eliminarProducto(id: number){
    this.cargador= true
    this._productoServicio.eliminarProducto(id).subscribe( () => {
      this.getListaProductos()
      this.toastr.warning("Producto eliminado con exito", "Producto eliminado")
    })
  }

}
