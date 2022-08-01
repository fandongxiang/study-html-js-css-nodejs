const fs = require('fs')
//读取成绩
fs.readFile('./成绩.txt','utf8',function (err,dataStr) {
  //判断是否读取成功
  if (err) {
    return console.log('读取文件失败')
  }
  //把成绩的数据，按照空格分隔
  const arrOld = dataStr.split(' ');            //string.split('分隔符')将字符串按照制定分隔符形成新字符串数组
  //循环遍历数组到新
  const arrNew = [];
  for (var i = 0; i < arrOld.length; i++) {
    arrNew.push(arrOld[i].replace('=','：'))    //string.replace('待替换','要替换')将字符串指定字符替换
  };
  const newStr = arrNew.join('\r\n');           //array.join()将数组按某种格式拼接成字符串

  // 调用fs.writeFile()
  fs.writeFile('./成绩-ok.txt',newStr,function (err) {
    if (err) {
      return console.log('文件写入失败')
    };
    console.log('文件写入成功')
  })
})
