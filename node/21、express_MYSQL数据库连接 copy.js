// 操作MySQL数据库步骤
// 1、安装MySQL模块；
const mysql = require('mysql')
// 2、连接MySQL数据库；
const db = mysql.createPool({         // 通过creatPool方法建立连接信息
    host: '127.0.0.1',                // 数据库的ip地址
    user: 'root',                     // 登录账号
    password: 'admin123',             // 登录密码
    database: 'my_db_01'              // 要连接的数据库
})
// 3、检测MySQL模块能否正常工作
db.query('SELECT 1',(err,result) => {
    if (err) return console.log(err.message)
    console.log(result);
})