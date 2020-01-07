

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