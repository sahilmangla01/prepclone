const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Model/UserModel')

const register =async (req,res)=>{
    try {
        const temp = req.body;

        // generate salt
        const salt = await bcrypt.genSalt(10);

        // generate HashPassword
        const hashpassword = await bcrypt.hash(temp.password, salt)

        // create user
        const user=  await User.create({name:temp.name , email:temp.email , phone:temp.phone ,password:`${hashpassword }` , college:temp.college})
        res.status(200).send({msg:"user register Sucessfully" ,user:user})
    } 
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: "not created ", err: error })   
    }
}


const login = async (req,res)=>{
    try {
        let data = req.body;
        
        // check if data present or not 
        const login = await User.findOne({email:data.email})

        // if data not present return not found
        if(!login){
            return res.status(200).send({msg:"User not found"})
        }

        // compare the password from request and database
        if(await bcrypt.compare(data.password,login.password)===false){
            return res.status(200).send({ msg: "incorrect password" })
        }

        // create jwttoken
        const token = jwt.sign({_id:login._id},"secret",{expiresIn:"24h"})
        res.status(200).send({msg:"user Logged in Sucessfully", user: login, token: token })

    } catch (error) {
        res.status(500).send({ msg: "error occured", err: error })   
        
    }
}

module.exports = {register , login}
