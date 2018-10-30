/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
var greetMsg = '';
function greet(name, age) {
    if (age === void 0) { age = 30; }
    greetMsg = 'Hello ' + name + ' You are ' + age + ' years Old!!';
    return greetMsg;
}
var result = greet('John');
console.log('Result : ' + result);
