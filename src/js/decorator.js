function log(target, name, descriptor){
    let oldValue = descriptor.value;
    descriptor.value = function(){
        console.log(`Calling ${name} with `, arguments);
        oldValue.apply(null, arguments);
    }
}

function life(target, name, descriptor){
    console.log(`${name} is going on!`);
}

class A{
    constructor(){
        this.name = '1';
    }

    @life
    @log
    b(){
        return 'hello world';
    }
}

let b = new A();
// console.log(b.b(123));