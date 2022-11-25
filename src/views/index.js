const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const adminRouters = require("../router/admin.js")
const shopRouters = require("../router/shop")

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json())
app.use(adminRouters)
app.use(shopRouters)

app.listen("8080", () => {
  console.log("Thanh Cong Roi Tuan!")
})

// // GET

// app.get("/test", (req, res) => {
//   res.status(200).send("hello")
// })

// app.get("/test/:hoten/:lop", (req, res) => {
//   const { hoten, lop } = req.params
//   res.status(200).send([hoten, lop])
// })

// const listData = [
//   {
//     id: 1,
//     hoten: "nguyen van tuan",
//     lop: "41.02",
//   },
//   {
//     id: 2,
//     hoten: "Tuan Nguyen",
//     lop: "41.02",
//   },
// ]
// // POST

// app.post("/them", (req, res) => {
//   const { id, hoten, lop } = req.body

//   listData.push({ id, hoten, lop })

//   res.status(200).send(listData)
// })

// // PUT
// app.put("/sua/:id", (req, res) => {
//   const { hoten, lop } = req.body
//   const { id } = req.params

//   const index = listData.findIndex((n) => n.id == id)

//   listData[index].hoten = hoten
//   listData[index].lop = lop

//   res.status(200).send(listData)
// })

// // delete
// app.delete("/xoa/:id", (req, res) => {
//   const { id } = req.params

//   const index = listData.findIndex((n) => n.id == id)

//   listData.splice(index, 1)

//   res.status(200).send(listData)
// })
