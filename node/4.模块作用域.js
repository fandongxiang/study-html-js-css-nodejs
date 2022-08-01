//一、模块作用域演示
const text = require('./module-exports');
console.log(text);
// fn();                               //无法调用fn，以为fn为text中的模块作用域
// console.log(name);                  //无法打印name，以为fn为text中的模块作用域

//二、向外共享模块作用域中的成员：exports和module.exports.xx
// console.log(module);
console.log(text['name']);             //module传输过来的为对象，使用对象方法调用
//注意：module.exports = {}会覆盖exports.XX 和module.exports.XX

//三、commonJS规范
//① 每个模块内部，module代表当前模块变量；
//② module变量是一个对象，它的exports属性是对外的接口；
//③ 加载某个模块，其实加载的是该模块module.exports属性。require加载的是模块；