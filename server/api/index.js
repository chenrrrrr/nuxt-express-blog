const { Router } = require('express')
const router = Router()

// 后台
const admin = require('./admin')
router.use('/admin',admin)

// 前台


module.exports = router