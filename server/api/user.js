const { Router } = require('express')
const route = Router()

route.post('/getData',(req,res,next)=>{
  res.json([{msg:1},{msg:3}])
})

module.exports = route