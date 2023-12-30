const mongoose = require('mongoose')
const mongoUri = require('../url/mongoDB.url');

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("error",err => {
    console.log("error : " +err)
})

mongoose.connection.on("connected",(err,res) => {
    console.log('mongo connect')
})