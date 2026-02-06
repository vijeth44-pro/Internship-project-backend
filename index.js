import express from 'express'

const app = express()
app.use(express.json())


const PORT = 7000


//test api(optional)
app.get("/test",(req,res)=>{
    res.send("Hi iam backend!")
})

app.listen(PORT, () =>{
    console.log("Hi !,Backend running on "+PORT)
})