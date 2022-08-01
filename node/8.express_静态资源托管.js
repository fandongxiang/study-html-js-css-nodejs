// 静态资源托管：express.static('路径')
// 将静态资源托管设为全局：app.use(express.static('路径'))
//注意:存放静态文件的目录名不会出现在URL中

//通过express创建一个服务器
const express = require('express')
const app = express()
app.listen(8080, ()=> {
    console.log('express runing at localhost');
})

//将case中的文件静态托管
// app.use(express.static('./case/tech/'))        //虽然tech也在case里面，但不能穿透，必须写成完整的case/tech


// 托管多个静态文件：程序按照先后顺序查找
// app.use(express.static('./image/'))            //会先访问case中的index.html

// 挂载路径前缀
app.use('/abc',express.static('./case/tech/'))