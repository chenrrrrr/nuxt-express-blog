const { Router } = require('express')
const router = Router()

const user = require('./user')
const util = require('./util')

router.use('/user',user)
router.use('/util',util)

module.exports = router