const time = require('./包_格式化时间')
//调用方法
const dt = new Date()
console.log(dt);
const newDt = time.dateFormat(dt);
console.log(newDt)