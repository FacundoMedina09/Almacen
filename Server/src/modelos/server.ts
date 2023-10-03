import express, {Application, Request, Response}from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto.routes';
import db from '../db/conexion.db';


class Server {
 
    private app: Application;
    private puerto: string;

    constructor (){
       
        this.app= express();
        this.puerto = process.env.PORT ||'3001'; // Si no existe el puerto "PORT", se usa el puerto 3001
        this.Listen();
        this.Midlewares(); //Se llama primero el parseo antes que los ruteados
        this.Routes();
        this.DataBaseConexion();
    }


    Listen(){
        this.app.listen(this.puerto, () =>{
            console.log(`Aplicacion corriendo en el puerto ${this.puerto}`)
        })
    }

    Routes(){
        this.app.get('/', (req : Request, res: Response) =>{
            res.json({mseg: 'API TRABAJANDO'})
        })
        this.app.use('/api/productos', routesProducto)
    }

    Midlewares(){
        //Parseamos el body del producto que queremos agregar
        this.app.use(express.json());

        //Cors
        this.app.use(cors());


    }

    async DataBaseConexion(){
        //Conexion a base de datos de forma asincrona
        try {
            await db.authenticate()
             console.log("Base de datos conectada")
        } catch (error) {
            console.log(error)
            console.log("Error al conectarse a la base de datos")
        }

        
    }

}

export default Server;