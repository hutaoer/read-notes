// function co(fn) {
//     return function(done) {
//         var ctx = this;
//         var gen = fn.call(ctx); // 迭代器
//         var it = null;
//         function _next(err, res) {
//             if(err) res = err;
//             it = gen.next(res); // next 的参数用于赋值
//             //{value:function(){},done:false}
//             if(!it.done){
//                 // it.value 是一个函数
//                 // 传参 _next
//                 // 执行 it.value 这个函数 function(fn) {fs.readFile(file, 'utf8', fn)}  fn 为_next
//                 // _next(err, res) 为 fs.readFile的结果
//                 it.value(_next);
//             }
//         }
//         _next();
//     }
// }

// var fs = require('fs');
// //一个 thunk 函数
// function read(file) {
//     return function(fn){
//         fs.readFile(file, 'utf8', fn);
//     }
// }
// co(function *(){
//    var c = 2;
//    console.log(c);
//    var a = yield read('/Users/hutaoer/Sites/read-notes/file1.txt');
//    console.log(a);

//    var b = yield read('/Users/hutaoer/Sites/read-notes/file2.txt');
//    console.log(b);
// })();

// var r = 3;

// function* infinite_ap(a) {
//     for( var i = 0; i < 3 ; i++) {
//         a = a + r ;
//         yield a;
//     }
// }

// var sum = infinite_ap(5);

// console.log(sum.next()); // returns { value : 8, done : false }
// console.log(sum.next()); // returns { value : 11, done: false }
// console.log(sum.next()); // returns { value : 14, done: false }
// console.log(sum.next()); //return { value: undefined, done: true }

function * test () {
    var a = yield 'start';
    console.log(a);
    var b = yield 'running';
    console.log(b);
    var c = yield 'end';
    console.log(c);
    return 'over';
}

console.log(test.constructor.name)