const express = require('express');
const app = express();
const mongoose = require('mongoose');
const appRouter = require('./routes/app.router');
require('./config/mongo.connect');


app.use('/api/apps',appRouter);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

app.get('/',(req,res) => {
    res.send("Server is Ready");
})



const PORT = 5000
app.listen(PORT,()=>{
    console.log('port is running in ' + PORT)
})
