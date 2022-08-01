// 导入MySQL模块
const mysql = require('mysql')
// 连接数据库
 const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 测试数据库是否连接成功
db.query('select 1',(err,result) => {
    if (err) return console.log(err.message);
    console.log('数据库连接成功');
 })

// 更新数据：update 表名 set 字段=值 where 字段
// 1、定义要更新的数据对象
// let username = '樊东祥'
let dataStr = {id: 1,username: '王小刚',password: '789'}
// 2、定义要执行的sql语句
const upStr = 'update users set ? where id = ?'
// 3、执行更新操作
db.query(upStr,[dataStr,dataStr.id],(err,result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows ===1) {console.log(`更新数据${dataStr.id}成功`)}
})

// 删除数据：delete 表名 where 字段
// 1、定义要删除的字段
let uname = 'ls'
// 2、定义删除的sql语句
const deStr = 'delete from users where username=?'
// 3、执行删除操作
db.query(deStr,uname,(err,result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows ===1 ){ console.log(`删除成功：${uname}`)}
})

// 标记删除：当用户进行删除动作时，并不真正删除该条记录，而是将类似status这样的标记字段值设为1
// 删除roots用户时，将status更新为1
const delet = 'roots'
const update = 'update users set status=1 where username=?'
db.query(update,delet,(err,result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows ===1 ) {console.log(`成功更新用户:${delet}状态为1`)}
})