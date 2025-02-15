const express = require("express")
const aiRoute = require("./routes/ai.route")
const cors = require('cors')

 const app = express()
 app.use(cors())

 app.use(express.json())


app.get("/",(req,res)=>{
    res.send("welcome to RefactorX")

})

app.use("/ai",aiRoute)

module.exports = app