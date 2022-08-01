const { application } = require('express')
const express = require('express')
const fs = require('fs')
const app = express()
//托管静态页面
app.use(express.static('./express/'))
app.get('/welcom.js',(req,res) => {
    //根据查询值判断密码是否正确
    const user = req.query.user
    const ps = req.query.password
    console.log(req.query);
    if (user =='fandongxiang' && ps == 123) {
        res.send('welcom')
    }else if(user != 'fandongxiang') {
        res.send('用户名不存在')
    }else if (ps != 123 && user == 'fandongxiang') {
        res.send('密码错误')
    }
    // console.log(req.query);
    // res.send(req.query);
})
app.listen(8080,() => {
    console.log('runing at http://127.0.0.1');
})