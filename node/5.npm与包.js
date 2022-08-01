//社么是包？就是第三方模块，不是node.js内置模块
//为什么需要包？内置模块仅提供了一些底层API，开发效率高，包是基于内置模块封装出来的
//从哪里下载包？http://www.npmjs.com/，全球最大的开源包，从http://registry.npmjs.org/服务器上下载包
//如何从npm上下载包？通过npm包管理工具

// 例子：格式化时间包
// 1、利用npm工具下载格式化时间包-moment
// 2、使用require()导入格式化时间包
// 3、参考moment官方API文档对时间进行格式化 

//npm常用命令
// 更改npm下载地址
// 方法一：手动切换
// 1、查看当前的下包镜像源：npm config get registry
// 2、将下载的镜像源切换为淘宝：npm config set registry=http://registry.npm.taobao.org/
// 3、检查镜像源是否下载成功：npm config get registry
// 方法二：通过nrm包管理工具
// 1、导入nrm包管理工具：npm i nrm -g
// 2、查看所有可用的镜像源：nrm ls
// 3、将下包的镜像源切换为淘宝：nrm use taobao

// 导入包：npm install 包名[@版本号] or npm i 包名[@版本号]
// 删除包：npm uninstall 包名
// 导入项目所需的所有包：npm install

// 导入nodemon自动启停服务包：npm i nodemon -g
