const express = require("express")
const connectDB = require("./config/db")
const routes = require("./routes/api/books")

const app = express()

connectDB().then(() => {
    console.log("connected to mongodb")
})


require("dotenv").config( {path: "./config.env"})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/", routes)

// app.get("/", (req, res)=> res.send("hello world"))


// const dbo = require("./db/conn")
// app.listen(port, () =>{
//     dbo.connectToServer(function (err){
//         if(err) {
//             console.log(err)

//         }
//     })
//     console.log(`Server is running on port: ${port}`)
// })

//  app.get("/",(req, res) => {
//      res.json({
//          "project-name" : "remgmnt"
//      })
//  })