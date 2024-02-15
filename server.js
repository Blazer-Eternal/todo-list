const express = require('express')
const http = require('http')
const router = require('./route')
const body_praser = require('body-parser')

const app = express()

// app.use("/",(req,res)=>{
//     res.send("Express server")
// })


app.use(body_praser.urlencoded({ extended: true}));
app.use(body_praser.json()) 
app.use("/",router) 

const server = http.createServer(app);

server.listen(5000,()=>{
    console.log("server is running in http://localhost:5000");
})