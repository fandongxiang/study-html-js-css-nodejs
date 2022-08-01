//一、path.join(路径1，路径2，……)：将多个路径拼接
//1.引入path模块
const path = require('path');

//2.1传统相对路径:代码运行时，会以node命令所处的目录，动态拼接出操作文件的完整路径
const fs = require('fs');
fs.readFile('./read.txt','utf8',function (err,dataStr) {
  if (err) {
   return  console.log('文件读取失败')
  }
  console.log('文件读取成功：' + dataStr)
})

//2.2 __dirname:表示当前文件所处目录，不随node命令改变
fs.readFile(__dirname + '/case/成绩.txt','utf8',function (err,dataStr) {
  if (err) {
    return  console.log('文件读取失败' + err.message)
  }
  console.log('文件读取成功：' + dataStr)
})

//2.3 将__dirname通过path.join()拼接
fs.readFile(path.join(__dirname,'/read.txt'),'utf8',function (err,dataStr) {
  if (err) {
    return  console.log('文件读取失败')
  }
  console.log('文件读取成功：' + dataStr)
  console.log('--------------------')
})

//二、path.basename('路径',[.文件后缀])：获取路径中的文件名，如果有后缀则去除后缀
const filename = path.basename(path.join(__dirname,'/case/成绩-ok.txt'));
console.log(filename);
const filename1 = path.basename(path.join(__dirname,'/case/成绩-ok.txt'),'.txt');
console.log(filename1);

//三、path.extname('路径')：获取路径中的扩展名
console.log(path.extname(path.join(__dirname,'/case/读取写入_成绩.js')));
