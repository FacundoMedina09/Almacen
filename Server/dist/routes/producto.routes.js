"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controles_1 = require("../controles/producto.controles");
const router = (0, express_1.Router)();
router.get('/', producto_controles_1.getProductos); //Ruteo para ver una Lista de Productos
router.get('/:id', producto_controles_1.getProducto); //Ruteo para ver un Producto por el id 
router.delete('/:id', producto_controles_1.deleteProducto); //Ruteo para eliminar un producto por el id
router.post('/', producto_controles_1.postProducto); //Ruteo para agregar un producto
router.put('/:id', producto_controles_1.updateProducto); //Ruteo para modificar un producto por el id
exports.default = router;
