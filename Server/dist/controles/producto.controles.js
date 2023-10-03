"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducto = exports.postProducto = exports.deleteProducto = exports.getProducto = exports.getProductos = void 0;
const producto_modelos_1 = __importDefault(require("../modelos/producto.modelos"));
//Mostrar la lista de Productos
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaProductos = yield producto_modelos_1.default.findAll();
    res.json(listaProductos);
});
exports.getProductos = getProductos;
//Mostrar un producto desde su id
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_modelos_1.default.findByPk(id);
    //Si el producto existe, lo devuelve, sino se da un msj de error
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({ msg: `No existe un producto con el id ${id}` });
    }
});
exports.getProducto = getProducto;
//Eliminar un producto desde su id
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_modelos_1.default.findByPk(id);
    //Si el producto existe, lo elimina, sino se da un msj de error
    if (producto) {
        yield producto.destroy();
        res.json({ msg: `El producto fue eliminado con exito` });
    }
    else {
        res.status(404).json({ msg: `No existe un producto con el id ${id}` });
    }
});
exports.deleteProducto = deleteProducto;
//Agregar un producto
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_modelos_1.default.create(body);
        res.json({
            msg: 'Producto creado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al crear el producto',
        });
    }
});
exports.postProducto = postProducto;
//Modificar un producto por el id
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield producto_modelos_1.default.findByPk(id);
        if (producto) {
            yield producto.update(body);
            res.json({ msg: 'Producto actualizado con exito' });
        }
        else {
            res.status(404).json({ msg: `No existe un producto con el id ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ msg: `Error al actualizar producto` });
    }
});
exports.updateProducto = updateProducto;
