var http = require('http');
const server = http.createServer();
server.on('request',function (request, response) {
  response.end('Hello World');
})
server.listen(8080,() => {
    console.log('服务器启动成功');
});

console.log('Server running at http://127.0.0.1:8081/');