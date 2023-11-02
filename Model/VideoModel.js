const mongoose = require('mongoose')

const schema = mongoose.Schema;

const videoSchema = new schema({
    id:Number,
    video:String,
    name:String
})

module.exports = mongoose.model('video',videoSchema)
