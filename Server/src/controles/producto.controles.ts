import {Request, Response} from 'express';
import Producto from '../modelos/producto.modelos';

//Mostrar la lista de Productos
export const getProductos = async (req: Request, res: Response) => {

    const listaProductos = await Producto.findAll()
    res.json(listaProductos)
}

//Mostrar un producto desde su id
export const getProducto  = async (req: Request, res: Response) => {
    
    const {id}= req.params;
    const producto = await Producto.findByPk(id)
    
    //Si el producto existe, lo devuelve, sino se da un msj de error
    if(producto){
        res.json(producto)
    }
    else{
        res.status(404).json({msg: `No existe un producto con el id ${id}`})
    }
}

//Eliminar un producto desde su id
export const deleteProducto  = async (req: Request, res: Response) => {
    
    const {id}= req.params;
    const producto = await Producto.findByPk(id)

    //Si el producto existe, lo elimina, sino se da un msj de error
    if(producto){
        await producto.destroy();
        res.json({msg:`El producto fue eliminado con exito`})
    }
    else{
        res.status(404).json({msg: `No existe un producto con el id ${id}`})
    }
    
}

//Agregar un producto
export const postProducto  =  async (req: Request, res: Response) => {
    
    const {body}= req;

    try {
        await Producto.create(body)

        res.json({
            msg: 'Producto creado con exito',
        })   
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Error al crear el producto',
        })
    }
}

//Modificar un producto por el id
export const updateProducto  = async (req: Request, res: Response) => {
    const {id}= req.params;
    const {body}= req;


    try {
        const producto = await Producto.findByPk(id)

        if(producto){
            await producto.update(body)
            res.json({ msg: 'Producto actualizado con exito'})
        }
        else{
            res.status(404).json({msg: `No existe un producto con el id ${id}`})
        }
    }catch (error) {
        console.log(error)
        res.status(404).json({msg: `Error al actualizar producto`})
    }

   
}