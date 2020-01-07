const Model = require('../Models/Product');
const form = require('../Helpers/resForm')
module.exports = {

    getAll : (req,res) =>{
        Model.getAll() 
        .then(status1 => form.getAll(res,status1,200))//langsung diubah ke JSON
        .catch(error => console.log(error))
    },
    
    filterProduct: (req, res) => {
        const name = req.params.name;
        Model.filterProduct(name)
          .then(name => form.filterProduct(res, name, 200)) //langsung diubah ke JSON
          .catch(error => console.log(error));
      },
    
    deleteProduct : (req,res)=>{
        const id = req.params.id
        Model.deleteProduct(id)
        .then(id1=> form.deleteProduct(res,id1,200))
        .catch(error=> console.log(error))
    },
    postProduct : (req,res)=>{
        const body = req.body
        Model.postProduct(body)
        .then(body1=>form.postProduct(res,body1,200))
        .catch(error=> console.log(error))
    },
    putProduct:(req,res)=>{
        const body = req.body
        const id = req.params.id
        Model.putProduct(body,id)
        .then(results=> form.putProduct(res,results,200))
        .catch(error=> console.log(error))
    },
 

}