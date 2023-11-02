const mongoose = require('mongoose')

const schema = mongoose.Schema;

const otherData = new schema({
    id:Number,
    type:String,
    name:String,
    company:String,
    description:String,
    profile:String,
    companyimg:String,
})

module.exports = mongoose.model('other',otherData)