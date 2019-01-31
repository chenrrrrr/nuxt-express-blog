const { Router } = require('express')
const request = require('request')
const router = Router()

// 请求bing壁纸
router.get('/bing',(req,res,next)=>{
  request('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', function (error, response) {
    if (!error && response.statusCode == 200) {
      res.json({
        code:0,
        data:JSON.parse(response.body).images[0].url,
        msg:'获取bing壁纸成功'
      })
    }else{
      console.log(error)
    }
  })
})

module.exports = router