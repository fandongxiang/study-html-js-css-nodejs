//一、读取文件内容
//1.定义一个fs
const fs = require('fs')
//2.调用fs.readfile('文件路径','格式',回调函数(错误报告，读取成功内容))
fs.readFile('./read.txt','utf8',function (err,dataStr) {
  console.log(err)
  console.log(dataStr)
})
//为回调函数调用if条件
var result = '';
fs.readFile('./read.txt','utf8',function (err,dataStr) {
  console.log('--------------------------')
  if (err) {
    return console.log('读取文件失败')            //直接return跳出函数
  }
    console.log('读取成功：' + dataStr)
    result = dataStr;
})
console.log(result);
//二、写入文件内容:fs.writeFile('存放路径','要写入的内容','编码格式',回调函数)
fs.writeFile('./write.txt','fandong','utf8',function (err) {
  console.log(err)
  if (err) {
    return console.log('文件写入失败' + err.message)
  }
  console.log('文件写入成功')
})
//注意点1：写入时会自动创建一个文件；
//注意点2：回调函数不返回要写入的值
