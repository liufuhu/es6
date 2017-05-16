import co from 'co';


function* fibonacci(){
    let [pre, cur] = [0, 1];
    for(;;){
        [pre, cur] = [cur, pre+cur];
        yield cur;
    }
}

co(function(){
    return 'hello 大家好！';
}).then(result=>{
    console.log(result);
}, reason=>{
    console.log(reason);
})

function* generatorToPromise(){
    // return "123123"
    let aa = yield Promise.resolve('true');
    let bb = yield Promise.reject('false')

    return bb;
}
let result = generatorToPromise();
console.log(result.next().value);

co(generatorToPromise).then(function(data){
    console.log(data);
},reason=>{
    console.log(reason);
})

// console.log(fibonacci.constructor.name);

// for(let n of fibonacci()){
//     if(n > 1000) break;
//     console.log(n);
// }


function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

let number = numbers();
console.log(number.next());
console.log(number.next());
console.log(number.next());
// for(let n of number){
//     console.log(n)
// }
// console.log(n.next());
// console.log(numbers());


function* g() {
  yield 1;
  console.log('throwing an exception');
  throw new Error('generator broke!');
  yield 2;
  yield 3;
}

function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('第一次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误1', v);
  }
  try {
    v = generator.next();
    console.log('第二次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误2', v);
  }
  try {
    v = generator.next();
    console.log('第三次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误3', v);
  }
  console.log('caller done');
}

// log(g());


function *foo() {
  yield 2;
  yield 3;
  return "foo";
}

function *bar() {
  yield 1;
  var v = yield *foo();
  console.log( "v: " + v );
  yield 4;
  return 5;
}

// var it = bar();
// console.log(it.next());
// // {value: 1, done: false}
// console.log(it.next());
// // {value: 2, done: false}
// console.log(it.next());
// // {value: 3, done: false}
// console.log(it.next());
// // "v: foo"
// // {value: 4, done: false}
// console.log(it.next());
// // {value: undefined, done: true}


function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return 'The result';
}
function* logReturned(genObj) {
  let result = yield* genObj;
  console.log(result);
}

// console.log([...logReturned(genFuncWithReturn())]);
// The result
// 值为 [ 'a', 'b' ]


function *ajax(){
    // let str = yield setTimeout(function() {
    //     return 'xixihaha';
    // }, 200);
    yield new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('xixihaha');
        }, 200);
    });
    // console.log(str);
}
let ajaxResult = ajax();
// console.log(ajaxResult);
console.log(ajaxResult.next().value.then(data=>console.log(data)));


function* gen(x){
  var y = yield x + 2;
  return "y";
}

// var g = gen(1);
// console.log(g.next());
// console.log(g.next());
