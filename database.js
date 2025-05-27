const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("portifolio", "root", "fatec123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
