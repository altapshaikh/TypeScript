/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var array = ['John', 40, 'Manager'];
/* let eName = array[0];
    let eAge = array[1];
    let eDesg = array[2];
*/
var eName = array[0], eAge = array[1], eDesg = array[2];
console.log("eName : " + eName + " : eAge : " + eAge + " eDesg : " + eDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b : " + b);
var _a;
