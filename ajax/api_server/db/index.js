const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'ajax_test_lib'
})
db.query('select 1',(err,results) => {
    if (err) return console.log(err.message);
    console.log(results);
})
module.exports = db