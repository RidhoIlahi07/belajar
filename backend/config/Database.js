import { Sequelize } from "sequelize";

const db = new Sequelize ('db_rapat', 'root','', {
    host : 'localhost',
    dialect : 'mysql'
});

export default db;