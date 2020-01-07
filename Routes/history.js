const {getHistory,postHistory} = require ('../Controllers/history')
const express = require ('express');
const router = express.Router() // manggil router


router.get('/',getHistory)
router.post('/',postHistory)
module.exports = router