const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const multer=require('multer')
const cors = require('cors')

const app=express()
require('dotenv').config({path:'config.env'})

app.use(cors())
app.use(express.json())
app.use(multer().any())

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("DB Connection Successfull")
}).catch((err)=>console.log(err.message))

app.use('/',route)

app.listen(process.env.PORT , ()=>{
    console.log(`server Started on Port ${process.env.PORT}`)
    
})

