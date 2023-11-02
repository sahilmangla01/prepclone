const route = require('express').Router();
const {register , login} = require('../Controller/LoginSignup')
const {createMock, createVideo , getMockData ,getvideodata,createotherdata,getotherdata,createprojects,getprojectdata,newOrder} = require('../Controller/productController')

route.post('/register' , register);
route.post('/login' , login);

route.post('/createMock' , createMock)
route.get('/getMockData' , getMockData)

route.post('/createvideo' , createVideo)
route.get('/getvideodata' , getvideodata)

route.post('/createotherdata' , createotherdata)
route.get('/getotherdata' , getotherdata)

route.post('/createprojects' , createprojects)
route.get('/getprojectdata' , getprojectdata)
route.post('/neworder',newOrder)






module.exports = route
