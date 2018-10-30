/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
let greetMsg:string = '';
function greet(name:string,age:number=30):string{
    greetMsg = 'Hello ' + name + ' You are ' + age + ' years Old!!';
    return greetMsg;
}
let result:string = greet('John');
console.log('Result : ' + result);
