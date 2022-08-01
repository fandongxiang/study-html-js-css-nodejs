// CORS响应头
// Access-Control-Allow-Origin：其中orgin指定了允许访问该资源的外域URL地址
res.setHeader('Access-Control-Allow-Origin','http://itcast.cn')                    // 只允许来自http://itcast.cn的请求
res.setHeader('Access-Control-Allow-Origin','*')                                   // 允许来自任何域的请求

// Access-Control-Allow-Headers：默认情况下CORS只允许9个请求头：Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Date、Viewport-Width、Width
   // Content-Type(值仅限于text/plain、mltipart/form-data、application-data、applicatiion/x-www-form-urlencoded三者之一)
res.setHeader('Access-Control-Allow-Headers','Content-Type,X-Custom-Header')       // 允许客户端使用Content-Type和X-Custom-Header请求响应头

// Access-Control-Allow-Method：默认情况下仅支持客户端发起GET、POST、HEAD请求，额外方式需申请
res.send('Access-Control-Allow-Method','POST,GET,DELETE,HEAD')                     // 允许客户端发起POST等请求
res.send('Access-Control-Allow-Method','*')                                        // 允许客户端发起所有类型请求
