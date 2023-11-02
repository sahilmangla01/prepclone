const mongoose = require('mongoose')

const schema = mongoose.Schema

const MockSchema = new schema({
    id:Number,
        type:String,
        name:String,
        date:String,
        Participants:String,
        duration:String,
        img:String
})

module.exports = mongoose.model('Mock', MockSchema)