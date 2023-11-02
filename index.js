const express = require("express")
require('dotenv').config()
const cors = require('cors')
const route = require('./Router/userRouter')
const connectToDb = require("./connection")

const app = express();
app.use(cors({
    origin : "*"
}))
app.use(express.json())
app.use('/images',express.static('assets'));
app.use('/api', route)

const startConnection = async ()=>{
    try{
        await connectToDb(process.env.MONGO_URL)
        app.listen(process.env.PORT , ()=>console.log(`Server is running on port ${process.env.PORT}`))
    }
    catch(err){
        console.log(err);
    }
}

startConnection()





