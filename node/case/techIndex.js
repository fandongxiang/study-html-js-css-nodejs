//导入模块
const fs = require('fs');
const path = require('path');
const http = require('http');
//创建服务器
const server = http.createServer();
//为服务器绑定request事件
server.on('request',(req,rel) => {
  // rel.setHeader('Content-Type', 'text/html; charset=utf-8');
  let url = req.url;

  //利用path模块拼接路径
  fpath = path.join(__dirname,url);

  //利用fs模块读取文件
  fs.readFile(fpath,'utf8',(err,dataStr) => {
    if (err) {
      return rel.end('404 not found!')
    }
    rel.end(dataStr)
  })
});
//启动服务器
server.listen(8080,() => {
  console.log('启动服务器成功')
})

