function A(){
    this.do=function(){return 'foo';};
}
A.prototype = function(){
    this.do=function(){return 'bar';};
};//只是改变了原型，但没有改变构造方法，即没改变原constructor，所以调用new时用原constructor
var x=new A().do();
console.log(x);//foo

//封装继承函数：
function inherits(child,parent){
    var f=function(){};
    f.prototype=parent.prototype;
    child.prototype=new f();
    child.prototype.constructor=child;
}

//继承过程：
//parent:
function student(p){
    this.name = p.name||'Unnamed';
}
//child:
function primaryStudent(p){
    student.call(this,p);//注意
    this.grade = p.grade || 1;
}
//继承
inherits(primaryStudent,student);