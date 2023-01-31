const mongoose = require('mongoose');
var mongooseURL = 'mongodb+srv://huypqh:1@cluster0.kqlwgai.mongodb.net/test';

mongoose.connect(mongooseURL, {useNewUrlParser: true, useUnifiedTopology: true})

var connection = mongoose.connection
connection.on('error', () =>{
    console.log('Mongodb connection error')
})
connection.on('connected', () =>{
    console.log('Mongodb connected')
})

 module.exports = mongoose;
