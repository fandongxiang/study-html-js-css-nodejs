// 导入mysql模块
const mysql = require('mysql')
// 连接指定数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 测试数据库是否连接成功
db.query('select 1', (err,result) => {
    if (err) return console.log(err.message)
    console.log(result);
})

// 查询数据：通过db.query('sql语句'，(err,result) =>{}) 方法
const sqlStr = 'select * from users where username=?'
db.query(sqlStr,'樊东祥',(err,result) => {
    if (err) return console.log(err.message);
    console.log(result[0]['username']);                                      // 返回的结果是数组，通过数组方式
    console.log(typeof result[0]['username']);                               // 字符串格式
})

// // 插入数据单个数据：db.query(带占位符的sql语句，插入的数组，回调函数)
// // 1、要插入到users表中的数据对象
// const user = {username: 'roots',password: 'admin'}
// // 2、待执行的sql语句，其中？表示占位符
// const insertStr = 'insert into users (username,password) values (?,?)'
// // 3、使用数组的形式，依次为？占位符指定具体的值
// db.query(insertStr,[user.username,user.password], (err,results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {console.log('插入数据成功');}         // 通过resuls.affectedRows属性判断是否插入成功
// })

// 插入数据快捷方法：insert into 表名 set 数据对象
// 1、定义要插入的数据对象
const user1 = {username: '王芳',password: '123456'}
// 2、要执行的sql语句
const insertStr1 = 'insert into users set ?'
// 3、插入操作
db.query(insertStr1,user1,(err,result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {console.log('插入数据成功');}
})


// 总结：在使用db.query()方法中，第一个传入的sql语句中变量可以用？代替，第二个参数传入变量