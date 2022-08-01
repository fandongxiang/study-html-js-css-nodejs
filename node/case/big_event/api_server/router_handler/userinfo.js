const db = require('../db/index')

/* 获取用户信息的处理函数 */
exports.getUserinfo = (req,res) => {
    // 获取查询参数
    const userinfo = req.query
    // 导入数据库连接
    const sqlStr = 'select username,nickname,email,user_pic from ev_users where username =?'
    db.query(sqlStr,userinfo['username'],(err,results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) res.cc('获取用户信息失败！')
        res.send({
            status: 1,
            message: '获取用户信息成功！',
            data: results[0]
        })
    })
}
/* 更新用户信息的处理函数 */
exports.updateUserinfo = (req,res) => {
    // app.js 中定义用户名、昵称、邮件、头像的验证规则
    // 获取用户信息
    const userinfo = req.body
    // 更新用户信息
    // 客户端先通过getUserinfo查询到id，再传输过来
    const sqlStr = 'update ev_users set ? where id =?'
    db.query(sqlStr,[userinfo,userinfo.id],(err,results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !==1 ) return res.cc('用户更新失败')
        return res.cc('用户信息更新成功！',status=1)
    })
}
