const express=require('express')
const Router = express.Router()
var fileupload = require('express-fileupload')
app.use(fileupload({
    //setting tempfules jadi true
    useTempFiles:true
}))
Router.post('/upload',function(req,res,next){
    const file = req.files.photo
    console.log(file)
    //lalu pindahkan dari tempfile keserver cloudinary

     
})
