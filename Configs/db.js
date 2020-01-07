// create connection

const mysql = require ('mysql')

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.APP_PORT,
    cloud_name:process.env.CLOUDINARY,
    api_key:process.env.API_CLOUDINARY,
    api_secret:process.env.CLOUD_SECRET

     
});

//connected statements
db.connect((err)=>{
    if (err){
        throw err;
    }
        console.log('connecting ...... ')

});
module.exports = db;