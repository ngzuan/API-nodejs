const express = require("express")
const employController = require("../../controllers/employeesController")

const empRouter = express.Router()

empRouter.get("/getEmployees/:id", employController.getEmployees)

module.exports = empRouter
