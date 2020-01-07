
const router = require('express').Router();


const {register,getUsers,getUserById,updateUser,deleteUser,login} = require ('../Controllers/users')

router.post('/register',register)
router.get('/',getUsers)
router.get('/:id',getUserById)

router.post('/login',login)

module.exports = router