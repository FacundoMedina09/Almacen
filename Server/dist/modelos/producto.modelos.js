"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_db_1 = __importDefault(require("../db/conexion.db"));
const sequelize_1 = require("sequelize");
const Producto = conexion_db_1.default.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;
