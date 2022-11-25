const express = require("express")
const userController = require("../../controllers/useController")

const userRouter = express.Router()

userRouter.get("/getUser/:id", userController.getUser)
userRouter.get("/createUser", userController.createUser)

module.exports = userRouter
