const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

const mysql = require("mysql2")

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "18112002",
  database: "candystore",
})

app.listen("8080")

const rootRouter = require("./routers/index")

app.use("/api", rootRouter)
// , () => {
//   conn.connect((err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log("connected")
//   })
// }

// app.get("/api/getUser", async (req, res) => {
//   const sql = "SELECT * FROM candy_products"

//   conn.query(sql, (err, result) => {
//     if (err) {
//       res.status(500).send("loi")
//     }
//     res.status(200).send(result)
//   })

//   async- await
//   try {
//     const result = await conn.promise().query(sql)
//     res.status(200).send(result[0])
//     // tra ve 1 mang
//   } catch (err) {
//     res.status(500).send("loi")
//   }
// })

// app.get("/api/getUser/:id", (req, res) => {
//   const { id } = req.params

//   const sql = `SELECT * FROM candy_products WHERE candy_product_id=${id}`

//   conn.query(sql, (err, result) => {
//     if (err) {
//       res.status(500).send("loi")
//     }
//     res.status(200).send(result)
//   })
// })

// post
// app.post("/api/createUser", (req, res) => {
//   const { candy_product_id, name, cogs, price } = req.body
//   const sql = `insert into candy_products(candy_product_id,name, cogs,price) values(${candy_product_id},'${name}',${cogs},${price})`
//   conn.query(sql, (err, result) => {
//     if (err) {
//       res.status(500).send("loi")
//     }
//     res.status(200).send(result)
//   })
// })
