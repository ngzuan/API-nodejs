const User = require("../models/user")

const getUser = async (req, res) => {
  const data = await User.findAll()

  res.send(data)
}
const createUser = (req, res) => {
  res.send("create user")
}
module.exports = {
  getUser,
  createUser,
}
