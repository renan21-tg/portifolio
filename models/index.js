const Sequelize = require("sequelize");
const sequelize = require("../database");

const Projeto = require("./Projeto")(sequelize, Sequelize.DataTypes);

sequelize.sync();

module.exports = { Projeto };
