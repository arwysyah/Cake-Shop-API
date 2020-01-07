const express = require ('express');
const Router = express.Router() // manggil router
const productController = require ('../Controllers/Product');
const auth = require('../Helpers/Middleware/auth')

Router.get('/',productController.getAll);

Router.get('/filter/product/search/:name',productController.filterProduct)
Router.post('/',productController.postProduct);
Router.delete('/:id', productController.deleteProduct);
Router.put('/:id',productController.putProduct);



module.exports = Router
