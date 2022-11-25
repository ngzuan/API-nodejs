const Employees = require("../models/employees")

const getEmployees = async (req, res) => {
  const { id } = req.params

  const data = await Employees.findByPk(id)
  res.status(200).send(data)
}
module.exports = {
  getEmployees,
}
