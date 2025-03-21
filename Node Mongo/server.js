
const express= require('express')
const dotEnv= require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const employeeRoutes=require('./routes/employeeRoutes')
const ejs=require('ejs')

const app=express()
const PORT= process.env.PORT || 5000

app.set('view engine','ejs' )

dotEnv.config()
app.use(bodyParser.json())

//client side rendering
app.get('/mango',(req,res)=>{
    res.json({fruit:"mango"})
})

//server side rendering
app.get('/grapes',(req,res)=>{
    //res.json({fruit:"grapes"})
    res.render('samplePages')
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log(`${error}`)

})

app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})



