const express = require('express');
const morgan=require('morgan')
const creatError = require('http-errors')
require('dotenv').config()

const AuthRoute = require("./Routes/Auth.route")

const app = express();
const PORT = process.env.PORT || 3200

app.get("/", async (req, res, next) => {
    res.send("get ok")
})

app.use("/auth",AuthRoute)

app.use(async(req,res,next)=>{
    next(creatError(404,"Not Found"))
})

app.use((err,req,res,next)=>{
    req.status(err.status || 500)
    res.send({
        error:{
            status:err.status ||500,
            message:err.message,
        },
    })
})

app.listen(PORT,()=>{
    console.log("server running on port "+PORT);
})