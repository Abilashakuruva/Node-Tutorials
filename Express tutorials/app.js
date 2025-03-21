//console.log("Welcome to React Js")

const express=require("express")

const app=express()

const port=5000

app.use((req,res,next)=>{
    if(10>20){
        next()
    }
})

app.get('/home',(req,res)=>{
    res.send("Hello, I am Home Page")
})

app.get('/about',(req,res)=>{
    res.send("This is about Page")
})

app.get('/user/:121',(req,res)=>{
    res.send("you searched for 121")
})
app.listen(port,()=>{
    console.log("Server start and running successfully!")
})