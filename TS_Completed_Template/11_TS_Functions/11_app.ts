// Create a simple function to add two numbers
function sum(a:number,b:number):number{
    return a + b;
}
console.log(`sum(10,20) : ${sum(10,20)}`);

// Create the same add function with first number as 'any' type
function addAny(a:any,b:number):number{
    if(typeof a === 'number'){
        return a + b;
    }
    else if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            return b;
        }
        else{
            return parseFloat(a) + b;
        }
    }
    else{
        return b;
    }
}
console.log(`a:10 , b:20 = ${addAny(10,20)}`);
console.log(`a:'10' , b:20 = ${addAny('10',20)}`);
console.log(`a:'ABC' , b:20 = ${addAny('ABC',20)}`);
console.log(`a:[10,20] , b:20 = ${addAny([10,20],20)}`);
console.log(`a:{} , b:20 = ${addAny({},20)}`);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    // only 'a'
    if(b === undefined && c === undefined){
        return a;
    }
    // for 'a' , 'b'
    else if(c === undefined){
        return Math.max(a , b);
    }
    // for 'a' , 'b' , 'c'
    else{
        return Math.max(a, b , c);
    }
}
//console.log(`findMax() : ${findMax()}`);
console.log(`findMax(10) : ${findMax(10)}`);
console.log(`findMax(10,20) : ${findMax(10,20)}`);
console.log(`findMax(10,20,30) : ${findMax(10,20,30)}`);
//console.log(`findMax(10,20,30,40) : ${findMax(10,20,30,40)}`);
