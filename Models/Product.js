const db = require('../Configs/db');//karena ini tempatnya query jadi kita butuh akses database

module.exports = {
    getAll : ()=> { 
        return new Promise((resolve,reject)=>{
            db.query('SELECT * from product ',(error, status1)=>{
                if (!error)
                    resolve(status1,200)//mencobanya di console.log dulu
                 else
                   reject(error)
                });
        })
    },


filterProduct : (name)=> { 
    return new Promise((resolve,reject)=>{
        db.query("SELECT * FROM product WHERE name LIKE CONCAT('%', ?,  '%')",[name],(error, status1)=>{
            if (!error)
                resolve(status1)//mencobanya di console.log dulu
             else
               reject(error)
            });
    })
  },

    deleteProduct : id => {
        return new Promise((resolve,reject)=>{
            db.query('DELETE FROM product where id_product = ?',[id],(error,id1)=>{
        
                if (!error)
                resolve("Delete Succesfully",id1)//mencobanya di console.log dulu
                else
                reject(error)
            });
        })
    },
    postProduct : body =>{
        return new Promise((resolve,reject)=> {
            db.query('INSERT INTO product  set ?', [body],(error,body1)=>{
                if (!error)
                resolve(body1)
                else
                reject(error)
            });
        })
    },
    putProduct :(body,id)=>{
        return new Promise ((resolve,reject)=>{
            db.query('UPDATE  product  set ? where id_product = ?', [body,id],(error,results)=>{
            if (!error)
                resolve(results)
            else
            reject(error)
        });
        
        })
    },

    
};