const Sequelize = require("sequelize");
require("dotenv").config();

const dbName = 
process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbOptions = {
  host: '127.0.0.1',
  dialect: "mysql",
  port: 3306,
};

const sequelize = new Sequelize(dbName, dbUser, dbPassword, dbOptions);

module.exports = sequelize;