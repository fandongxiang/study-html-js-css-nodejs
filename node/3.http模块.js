//1.导入http模块
const http = require('http');

//2.创建web服务器实例
const serve = http.createServer();

//3.为服务器绑定request事件，监听客户端的请求:req和res
serve.on('request',(req,res) => {             //箭头函数，相当于DOM里的注册事件

//3.1 req是请求对象，包含和客户端相关的数据和属性
  //req.url 客户端请求的url地址
  const url = req.url;
  //req.method 客户端请求的方式
  const method = req.method;
  const str = `你的请求url为${url},你的请求方式为${method}`;   //es6模板字符串，``不是单引号
  console.log(str);

//3.2 res访问与服务器相关的数据和属性
  //res.setHeader('Content-Type','text/html; charset=utf-8') 解决中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  //res.end() 访问向客户端发送数据，并结束这次请求
  res.end(str);
})

//4.启动服务器:server.listen(端口号，cb回调)
serve.listen(8080,() => {
  console.log('当前服务器已启动')
})
