import express from 'express'
import mongoConnection from './Db.js'

const app = express()
app.use(express.json())
mongoConnection()

const PORT = 7000

//test api(optional)
app.get("/test",(req,res)=>{
    res.send("Hi iam backend!")
})

app.listen(PORT, () =>{
    console.log("Hi !,Backend running on "+PORT)
})