/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let array = ['John',40,'Manager'];

/* let eName = array[0];
    let eAge = array[1];
    let eDesg = array[2];
*/

let [eName , eAge , eDesg] = array;

console.log(`eName : ${eName} : eAge : ${eAge} eDesg : ${eDesg}`);

// Usage of Destructing to exchange the values of two vars
let a = 10;
let b = 20;
[a , b] = [b , a];
console.log(`a : ${a} b : ${b}`);
