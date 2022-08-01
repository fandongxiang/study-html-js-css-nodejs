// 利用模块路由化步骤
// 1、导入express
const express = require('express')
// 2、创建路由对象
const router = express.Router()
// 3、向路由对象挂载路由
router.get('/',(req,res) => {
    console.log('这是路由模块中的get');
    res.send('这是路由模块中的get请求')
})
router.post('/',(req,res) => {
    console.log('这是路由模块中的post');
    res.send('这是路由模块中的post请求')
})
// 4、向外共享路由对象
module.exports = router
