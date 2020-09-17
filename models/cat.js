const mongoose = require('mongoose');


const catSchema = new mongoose.Schema({
    breed: {type: String, required: true, default: "mixed"},
    pic: {type: String},
    name:{type: String, required: true,default: "cat"},
    gender:{type: String, required: true,default:'male'},
    age:{type: Number, required: true, default: '0'},
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   }, {timestamps:true}) ;

module.exports= mongoose.model('Cat',catSchema)