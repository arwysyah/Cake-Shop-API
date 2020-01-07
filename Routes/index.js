const express = require ('express')

const User= require('./users')

const history = require('./history')

const product = require('./Product')
const Router = express.Router();

Router.use('/product', product)

Router.use('/user',User)

Router.use('/history',history)



module.exports = Router // export Route