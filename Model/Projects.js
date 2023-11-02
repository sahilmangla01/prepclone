const mongoose = require('mongoose')

const schema = mongoose.Schema

const projects= new schema({
    id:Number,
        type:String,
        name:String,
        description:String,
        topic:[],
        img:String
})

module.exports = mongoose.model('project', projects)