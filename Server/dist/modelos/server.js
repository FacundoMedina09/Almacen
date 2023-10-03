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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_routes_1 = __importDefault(require("../routes/producto.routes"));
const conexion_db_1 = __importDefault(require("../db/conexion.db"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.puerto = process.env.PORT || '3001'; // Si no existe el puerto "PORT", se usa el puerto 3001
        this.Listen();
        this.Midlewares(); //Se llama primero el parseo antes que los ruteados
        this.Routes();
        this.DataBaseConexion();
    }
    Listen() {
        this.app.listen(this.puerto, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.puerto}`);
        });
    }
    Routes() {
        this.app.get('/', (req, res) => {
            res.json({ mseg: 'API TRABAJANDO' });
        });
        this.app.use('/api/productos', producto_routes_1.default);
    }
    Midlewares() {
        //Parseamos el body del producto que queremos agregar
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    DataBaseConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion a base de datos de forma asincrona
            try {
                yield conexion_db_1.default.authenticate();
                console.log("Base de datos conectada");
            }
            catch (error) {
                console.log(error);
                console.log("Error al conectarse a la base de datos");
            }
        });
    }
}
exports.default = Server;
