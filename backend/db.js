const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:./db.sqlite3");

sequelize
  .authenticate()
  .then(() => console.log("Db connect"))
  .catch(() => console.log("Db not connect"));
