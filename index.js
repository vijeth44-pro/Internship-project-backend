import express from 'express'
import mongoConnection from './Db.js'
import userRoutes from "./routes/userRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"

const app = express()
app.use(express.json())
// mildware for frontend
// means bridge
mongoConnection()

const PORT = 1000

// test api(optional)
app.get("/test",(req, res)=>{
     res.send("Hi iam backend!")
})

app.listen(PORT, ()=>{
    console.log("Hi !,Iam Backend running on "+PORT)
})

// call
// mildware 
// means bridge
// app.use path filename
app.use("/users",userRoutes)
app.use("/students",studentRoutes)


// http://localhost:1000/users/addUser complete api  base path till port no ,mildware,routing path  endpoint