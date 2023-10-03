import {Router} from 'express';
import { deleteProducto, getProducto, getProductos, postProducto, updateProducto } from '../controles/producto.controles';

const router = Router();

router.get('/', getProductos)           //Ruteo para ver una Lista de Productos
router.get('/:id', getProducto)         //Ruteo para ver un Producto por el id 
router.delete('/:id', deleteProducto )  //Ruteo para eliminar un producto por el id
router.post('/', postProducto)          //Ruteo para agregar un producto
router.put('/:id', updateProducto)      //Ruteo para modificar un producto por el id

export default router;