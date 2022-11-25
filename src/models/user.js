const { Model, DataTypes } = require("sequelize")

const sequelize = require("./index")

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "is number",
        },
      },
    },
    full_name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },
    pass_word: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false,
  }
)
console.log(User === sequelize.models.User)
module.exports = User
