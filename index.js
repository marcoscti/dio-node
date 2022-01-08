const express = require("express")
const userRoute = require("./routes/userRoute")
const app = express()
const userRoutes = require("./routes/userRoute")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

userRoute(app)

app.get("/",(req,res)=>{
    res.send("Seja bem vindo ao Express")
})

app.listen(3000,()=>{
    console.log("rodando")
})