const { Model, DataTypes } = require("sequelize")

const sequelize = require("./index")

class Employees extends Model {}

Employees.init(
  {
    employee_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "is number",
        },
      },
    },
    first_name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING,
    },
    hourly_wage: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Employees",
    tableName: "employees",
    timestamps: false,
  }
)

console.log(Employees === sequelize.models.Employees)

module.exports = Employees
