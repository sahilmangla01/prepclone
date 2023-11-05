const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserSchema = new schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    password:{type:String , required:true},
    college:{type:String , required:true},
    mock:[{ mockId: {type: mongoose.Schema.Types.ObjectId,ref: 'Mock'}}],
    fullstack:{type:String},
    master:{type:String}
})

module.exports = mongoose.model("User" , UserSchema)