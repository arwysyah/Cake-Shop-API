require('dotenv').config()
const express = require ('express');
//const mysql = require ('mysql');
const bodyparser = require('body-parser');
const airapi = require('airapi')

const router = require('./Routes/index')
const cors = require ('cors')
const helmet =require('helmet')
// const logger = require ('morgan')
const auth = require ('./Helpers/Middleware/auth')
const app = express(); 
// const userRouter = require('./Routes/users')
var fileupload = require('express-fileupload')
app.use(fileupload({
    //setting tempfules jadi true
    useTempFiles:true
}))

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use('/', router);
// app.use(logger('dev'))
app.use(helmet.xssFilter())
app.use(express.json())




var cloudinary =require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.CLOUDINARY,
    api_key:process.env.API_CLOUDINARY,
    api_secret:process.env.CLOUD_SECRET
})

app.post('/upload',function(req,res,next){
    const file = req.files.photo
    console.log(file)
    //lalu pindahkan dari tempfile keserver cloudinary

    cloudinary.uploader.upload(file.tempFilePath,function(err,result){
        //parameter tempFiles seebagai location dariimana kita upload file,dan parameter callback
        // console.log(err,'Error')
        // console.log(result,'result')
        if (err){
            console.log(err)
        }else{
        res.send({
            success:'true',
            result
        })
        }
    })    
})





app.listen (process.env.PORT|| 5050,()=> console.log('express is running',));

// app.use ('/', auth.login, router);
module.exports = app
