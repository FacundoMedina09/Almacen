import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('almacenamiento', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize; 