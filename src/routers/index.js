const express = require("express")
const rootRouter = express.Router()

const userRouter = require("./v1/userRouter")

const empRouter = require("./v1/employeesRouter")

rootRouter.use("/user/v1", userRouter)
rootRouter.use("/emp/v1", empRouter)

module.exports = rootRouter
