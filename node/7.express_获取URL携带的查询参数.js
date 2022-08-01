const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('exprss runing at http://127.0.0.1');
})
// 获取URL中携带的静态查询参数: req.query
app.get('/user',(req,res) => {
    //通过req.query获取URL中携带的查询参数
    console.log(req.query);                    //默认是空对象
    res.send(req.query)
})

app.post('/user',(req,res) => {
    console.log(req.query)
    res.send(req.query)
})
//获取URL中携带的动态查询参数: req.params
app.get('/:id/:name',(req,res) => {            //此处的id和name是接受动态参数的键
    console.log(req.params);
    res.send(req.params)
})
app.post('/:sex/:age',(req,res) => {
    console.log(req.params.sex);
    console.log(req.params.age);
    res.send(req.params)
})