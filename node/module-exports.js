const name ='fandongxiang';
var fn = function() {
    console.log('hello node.js');
}
//使用module.exports向外共享name
module.exports.name = name;           //注意此处额第一个name为共享时的键
exports.fn = fn;
module.exports = {
    name:'xiaotuanzi',
    sex:'男'
}