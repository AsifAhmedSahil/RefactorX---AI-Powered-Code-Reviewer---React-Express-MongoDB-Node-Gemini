const express = require("express")
const router = require("./routes/ai.route")

 const app = express()

app.get("/",(req,res)=>{
    res.send("welcome to RefactorX")

})

app.use("/ai",router)

module.exports = app