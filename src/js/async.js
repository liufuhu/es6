async function f(){
    return "hello world";
}
// console.log(f());
// f().then((_str)=>{
//     console.log(_str);
// })

async function ferr(){
    throw Error("wrong");
}
// ferr().then(()=>{},(reason)=>{
//     console.log(reason);
// })



async function myfunc(){
    let result = null;
    try{
        result = await new Promise(function(resolve, reject){
            resolve('ok');
            // reject('error');
        })
    }catch(err){
        console.log(err + "123");
        // throw Error('hahahaha');
    }
    console.log(result);
    return result;
}
// console.log(myfunc());
// myfunc().then((_data)=>{
//     console.log(_data);
// }, (reason)=>{
//     console.log(reason);
// })



const urls = [
    'http://www.baidu.com',
    'http://www.163.com',
    'http://www.sina.com'
];
// logInOrder(urls);
function logInOrder(urls) {
  // 远程读取所有URL
  const textPromises = urls.map(url => {
      return new Promise(function(resolve, reject){
          setTimeout(function(){
            resolve(url);
          }, 300);
      })
    // return fetch(url).then(response => response.text());
  });

  // 按次序输出
  textPromises.reduce((chain, textPromise) => {
      console.log(chain);
    return chain.then(() => textPromise)
      .then(text => console.log(text));
  }, Promise.resolve());
}

// asyncLogInOrder(urls);
async function asyncLogInOrder(urls) {
    let url;
    const textPromise = (url) => {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(url);
            }, 300);
        });
        // return fetch(url).then(response => response.text());
    };
    for(url of urls){
        const text = await textPromise(url);
        console.log(text);
        // text.then(data=>{
        //     console.log(data);
        // })
    }
}



let a1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('a1 ok');
    }, 200);
});

let a2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('a2 ok');
    }, 200);
});

let a3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('a3 error');
    }, 200);
});

let a4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('a4 ok');
    }, 200);
});

let _arrs = [a1, a2, a3, a4];

async function tryReturn(arrs){
    var result = null;
    try{
        let item;
        for(item of arrs){
            result = await item; // 有异常后 停止往后的执行
        }
    }catch(err){
        console.log(err);
    }

    return result;
}

let result = tryReturn(_arrs);
result.then(data=>console.log(data), err=>console.log(err));