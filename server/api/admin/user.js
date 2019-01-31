const {Router} = require('express')
const router = Router()

router.post('/login',(req,res,next)=>{
  res.json({
    code:0,
    data:null,
    msg:'登陆成功'
  })
})

module.exports = router