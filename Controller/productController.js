const data = require('../data')
const MockSchema = require('../Model/ProductModel')
const videoSchema = require('../Model/VideoModel')
const otherData = require('../Model/DataModel')
const projects = require("../Model/Projects")
const user = require("../Model/UserModel")

const Razorpay = require('razorpay')

const createMock = async(req,res)=>{
        try {
            const mock = await MockSchema.create(data)
            res.status(200).send({mock:mock})
        } catch (error) {
            res.status(500).send('error occured', error)
        }
    }
    
    const getMockData = async(req,res)=>{
        try {
            const mockData =await MockSchema.find()
            res.status(200).send(mockData)
        } catch (error) {
        res.status(500).send('error occured', error)
        
    }
}

const createVideo = async(req,res)=>{
    try {
        const video = await videoSchema.create(data)
        res.status(200).send({video:video})
        
    } catch (error) {
        res.status(500).send('error occured', error)
        
    }
}

const getvideodata = async(req,res)=>{
    try {
        const videoData =await videoSchema.find()
        res.status(200).send(videoData)
    } catch (error) {
    res.status(500).send('error occured', error)
    
}
}

const createotherdata = async(req,res)=>{
    try {
        const other = await otherData.create(data)
        res.status(200).send(other)
        
    } catch (error) {
        res.status(500).send('error occured', error)
        
    }
}

const getotherdata =async(req,res)=>{
    try {
        const other =await otherData.find()
        res.status(200).send(other)
    } catch (error) {
    res.status(500).send('error occured', error)
    
}
}

const createprojects =  async(req,res)=>{
    try {
        const project = await projects.create(data)
        res.status(200).send(project)
        
    } catch (error) {
        res.status(500).send('error occured', error)
        
    }
}

const getprojectdata = async(req,res)=>{
    try {
        const project =await projects.find()
        res.status(200).send(project)
    } catch (error) {
    res.status(500).send('error occured', error)
    
}
}

const razorpay = new Razorpay({
    key_id: 'rzp_test_5PB9AGsx0x9agg',
    key_secret: '2I4UfNjZlVQfJHTcThve0TZN',
})

const newOrder=async (req,res)=>{
    


        const amount=req.body.amount
        const options = {
            amount:amount,
            currency: 'INR',
            receipt: 'manglasahil9050@gmail.com',
          
        }
    
        try {
            const response = await razorpay.orders.create(options);
            res.send({
                success:true,
                msg:'Order Created',
                order_id:response.id,
                amount:options.amount,
                key_id:'rzp_test_5PB9AGsx0x9agg'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    
    const dashboardData =async (req,res)=>{
        try {
            const {id,userId} = req.body;
            const find =await user.findOne({_id:userId,'mock.mockId':id})
            if(find){
               res.send("product already exist")
            }
            else{
                await user.updateOne({_id:userId},{$push:{mock:{mockId:id}}})
            } 
            }


            
        catch (error) {
           console.error(error);
           res.status(500).send('Internal Server Error');
        
       }
        
    }

    const getDashboardData = async(req ,res)=>{
        try {
            const {userId} = req.body
            const data = await user.findOne({_id:userId}).populate('mock.mockId')

            res.status(200).send(data)

            

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
         
        }
    }


    const programme = async(req,res)=>{
        try {
            const {userId , name} = req.body;
            const find = await user.findOne({_id :userId,'fullstack':name})
            
            if(!find){
                await user.updateOne({_id:userId},{fullstack:name})
            }
            if(find){

                res.send("product already exist")
            }
           
             

            
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    const master = async(req,res)=>{
        try {
            const {userId , name} = req.body;
            const find = await user.findOne({_id :userId,'master':name})
            
            if(!find){
                await user.updateOne({_id:userId},{master:name})
            }
            if(find){

                res.send("product already exist")
            }
           
             

            
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }



module.exports = {createMock , getMockData , createVideo ,getvideodata, createotherdata ,getotherdata ,createprojects,getprojectdata,newOrder , dashboardData, getDashboardData, programme,master}