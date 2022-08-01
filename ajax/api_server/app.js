const express = require('express')
const app = express()
app.listen(3007,() => {
    console.log('ajax_text running at localhost:8080');
})

// 注册配置跨域中间件
const cors = require('cors')
app.use(cors())

// 托管静态资源
// app.use(express.static({''}))

// 注册并配置解析 x-www.form-urlencoded 表单中间件
app.use(express.urlencoded({extended:false}))

const db = require('../api_server/db/index')

// 获取图书请求
app.get('/api/getbook',(req,res) => {
    const book_info = req.query
    if (book_info.bookname == null) {var sqlStr = 'select * from lib ' }
    else {var sqlStr = 'select * from lib where bookname = ?' }
    db.query(sqlStr,book_info.bookname,(err,results) => {
        if (err) return res.send(err.message)
        res.send(results)
    })
})

// 添加图书请求
app.post('/api/addbook',(req,res) => {
    const book_info = req.body
    const sqlStr = 'insert into lib set ?'
    db.query(sqlStr,book_info,(err,results) => {
        if (err) return res.send(err.message)
        if (results.affectedRows === 1) return res.send({
            status: 200,
            message: '插入书籍成功！'
        })
    })
})

// 删除图书请求
app.get('/api/delbook',(req,res) => {
    const id = req.query['id']
    const sqlStr = 'update lib set status = 1 where id = ?'
    db.query(sqlStr,id,(err,results) => {
        if (err) return res.send(err.message)
        if (results.affectedRows == 1 ) return res.send({
            status: 200,
            message: '删除成功！'
        })
        
    })
})

// 测试表单提交
app.post('/api/postForm',(req,res) =>{
    const userinfo = req.body
    console.log(userinfo);               // 通过Ajax提交的表单字符串数据可以直接用 req.body 接收成对象
    res.send({
        status: 200,
        message: '登录成功！',
        data: userinfo
    })
})