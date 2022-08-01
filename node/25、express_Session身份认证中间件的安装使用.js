// 现实生活中的会员卡身份认证方式，在web开发中专业术语叫Cookie，突破HTTP无状态性

// 什么时Cookie？
// Cookie是存储在用户浏览器中一段不超过4kb的字符串，它由一个名称(name),一个值(value)和几个其它用于控制Cookie有效性、安全性、使用范围的可选属性组成；
// 每个不同域名下的Cookie是各自独立的，每当客户端发起请求，会把未过期的Cookie一并发到服务器

// Cookie的特性：
// 1、自动发送；
// 2、各自独立；
// 3、过期时限；
// 4、4KB限制；

// Session认证的精髓：会员卡+刷卡认证，解决了伪造Cookie的不安全性

// 在express中使用Session认证的步骤：
// 1、导入express-session中间件：npm i express-session 
// 2，导入session模块；
const { application } = require('express')
const session = require('express-session')
// 3、通过app.use()注册为全局中间件；
app.use(session({
    secret:'keyboard cat',            // secret 属性值可以为任意字符串
    resave: false,                    // 固定写法
    saveUninitialized: true           // 固定写法
}))
