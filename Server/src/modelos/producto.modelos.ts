import db from '../db/conexion.db';
import {DataTypes} from 'sequelize';

const Producto = db.define('Producto',{
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.INTEGER
    },

}, {
    createdAt: false,
    updatedAt: false

})

export default Producto;