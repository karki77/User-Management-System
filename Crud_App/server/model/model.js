const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        requre: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;