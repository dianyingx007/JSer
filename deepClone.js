/*
考点：
原始数据类型的直接赋值
function的exception
对象的深度克隆中Array类型的判断
克隆函数的递归调用
*/
function deepClone(obj){
    if(typeof obj !=="object"&&typeof obj!=="function"||obj===null) return obj;
    var o= isArray(obj)?[]:{};
    for(var key in obj){
        o[key] = typeof obj[key] ==="object"?deepClone(obj[key]):obj[key];
    }
    return o;
}
function isArray(obj){
    return toString.call(obj)==='[object Array]';
}

//test，没有反例表示可以直接赋值
var a=2,b=deepClone(a);
a=3;
console.log(b);

var a='sdsd',b=deepClone(a);
a='dsds';
console.log(b);

var a=true,b=deepClone(a);
a=false;
console.log(b);

var a=null,b=deepClone(a);
a=2;
console.log(b);

var c,b=deepClone(c);
c=2;
console.log(b);

var a=[1,2,3],b=deepClone(a);
a.push(4);
console.log(b);
/*
反例：
var a=[1,2,3],b=a;
a.push(4);
console.log(b);//[1,2,3,4]
*/

var a={a:23,b:40},b=deepClone(a);
a.a=24;
a.c=50;
console.log(b.a+''+b.c);
/*
var a={a:23,b:40},b=a;
a.a=24;
a.c=50;
console.log(b.a+''+b.c);//2450
*/

var a=function(){ console.log(1); };
a.zz=1;
var b=deepClone(a);
a.zz=3;
console.log(b.zz);
/*
var a=function(){ console.log(1); };
a.zz=1;
var b=a;
a.zz=3;
console.log(b.zz);//3
*/

var a={e:2,f:{g:2},h:[7,8,[9]]},b=deepClone(a);
a.f.g=3;
a.h[2].push(10);
console.log(b);
/*
var a={e:2,f:{g:2},h:[7,8,[9]]},b=a;
a.f.g=3;
a.h[2].push(10);
console.log(b);//{ e: 2, f: { g: 3 }, h: [ 7, 8, [ 9, 10 ] ] }
*/
