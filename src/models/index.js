const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("candystore", "root", "18112002", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
})

module.exports = sequelize
