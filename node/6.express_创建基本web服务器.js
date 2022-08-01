//在终端安装express包:npm i express@4.17.1
//创建基本的web服务器的步骤
// 1、导入express
const express = require('express')

// 2、创建web服务器
const app = express()

// 3.1 监听get请求：利用app.get('请求的url'，function (req,res) {res.send()})
app.get('/user',(req,res) => {
    res.send({name:'fandongxiang',age:27,gender:'男'})
})

// 3.2 监听post请求：利用app.post('请求的url'，function (req,res) {处理函数})
app.post('/user',(req,res) => {
    res.send('请求成功')
})

// 4、利用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(8080,() => {
    console.log('express runding at http://127.0.0.1:80');
})

//注意：express包必须安装在当前js同级目录下，才能导入