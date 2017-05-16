// class A {
//     getName(){
//         return 'A';
//     }
// }
// console.log(A.__proto__ === Function.prototype) // true
// console.log(A.prototype.__proto__ === Object.prototype) // true
// console.log(A.prototype === Function.prototype) // true
// class B extends A{
//     constructor(){
//         super();
//         console.log(super.getName());
//     }
// }
// let b = new B();


class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();



class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2