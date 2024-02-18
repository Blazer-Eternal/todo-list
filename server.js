const express = require('express')
const http = require('http')
var port = process.env.PORT
require('dotenv').config()
var port=process.env.PORT


const app = express()
const router = require('./route')
app.use("/",(req,res)=>{
    res.json({message:"Home page"})
})

// const router = require('./route')
// const body_praser = require('body-parser')
// app.use(body_praser.urlencoded({ extended: true}));
// app.use(body_praser.json()) 
// app.use("/",router) 

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("App Running in localhost:"+port);
})