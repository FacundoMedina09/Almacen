import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent {

  form: FormGroup;
  cargador: boolean = false
  id: number

  constructor(private fb: FormBuilder, private _productoServicio : ProductoService, private router: Router,
    private toastr : ToastrService, private aRouter: ActivatedRoute){

    this.form = this.fb.group({
      
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, Validators.required],
      stock: [null, Validators.required],
      
    });
    this.id = Number (aRouter.snapshot.paramMap.get('id'))

  }

  ngOnInit(){
    this.getProducto(this.id)
    this.cargador =false;
  }
  getProducto(id: number){
    this.cargador =true;
    this._productoServicio.getProducto(id).subscribe((data:Producto) =>{
      console.log(data)
      this.cargador =false;
      this.form.setValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        stock: data.stock
      })
    })
  }


  agregarProducto(){
  
    const producto : Producto ={
      nombre: this.form.value.nombre, 
      descripcion: this.form.value.descripcion, 
      precio: this.form.value.precio, 
      stock: this.form.value.stock, 
    }
    this.cargador = true

    if (this.id !=0) {
      //Editar Producto
     
      producto.id = this.id
      this._productoServicio.updateProducto(this.id, producto).subscribe( () =>{
        this.toastr.success(`El producto ${producto.nombre} fue actualizado correctamente`, "Producto actualizado")
        this.cargador = false
        this.router.navigate(['/'])
      }) 
    }
    else{
      //Agregar Producto
      this._productoServicio.agregarProducto(producto).subscribe(() =>{
        console.log("Producto agregado")
        this.toastr.success(`El producto ${producto.nombre} fue registrado correctamente`, "Producto registrado")
        this.cargador = false
        this.router.navigate(['/'])

      })

    }

  }

}
