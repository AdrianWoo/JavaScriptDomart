//变量
// var mood = 'happy',
//     age = 33;
// var MOOD = 'sed';
// alert(mood);
// alert(age);
// alert(MOOD);
// var height = "about 5'10\"tall";
// alert(height);

//数组
// var beatles = Array(4);
// beatles[0]  = "John";
// beatles[1] = "Paul";
// beatles[2] = "George";
// beatles[3] = "Ringo";

// var beatles = Array("John","Paul","George","Ringo");
// for (const key in beatles) {
//     alert(beatles[key]);
// }

// for (let index = 0; index < beatles.length; index++) {
//     const element = beatles[index];
//     alert(element); 
// }

//对象 写法一
// var lennon = Object();
// lennon.name = "John";
// lennon.age = 1940;
// lennon.living = false;
//对象写法2
var lennon = {name:"John",age:"1940",living:false};
//对象与数组的结合
var beatles = Array();
beatles[0] = lennon;
// 使用对象包含对象
var beatles = {};
beatles.vocalist = lennon;
alert(beatles.vocalist.name);

// 操作
// -- 算数运算符
alert("10"+20);
alert(10+20);

// += 可以同时完成赋值和加减的操作
var year = 2010;
var message = "This year is ";
message += year
alert(message);    //结果是This year is 2010

// 条件语句
if (1 > 2) {
    alert("InS");
} else {
    alert("Fuck");
}

// ==和===的区别

// == false和空是相等的
var a = false;
var b = "";
if (a == b) {
    alert("thx");
}

// 如果使用===对比，那么比较值得时候，同时会比较类型
var c = false;
var d = "";
if (c === d) {
    alert("thx");
}

// != 和!== 也是同理
// 函数 一个方法
function shout(){
    var beatles = Array("John","Paul","George","Ringo");
    for (var conut = 0; conut < beatles.length; conut++) {
      alert(beatles[conut]);
    }
}

//执行方法
shout();

// 代参数的函数
function multiply(a, b) {
    var result = a - b;
    return result;
}

alert(multiply(20, 10));

// 变量的作用域：全局变量和局部变量  局部，函数的内部 在函数的内部使用var
//声明变量，就是局部，否则使用的是是全局，var设定了作用域


//对象  包含属性和方法
//属性是隶属于某个热定的对象的变量
//方法是只有某个特定对象才能调用的函数

