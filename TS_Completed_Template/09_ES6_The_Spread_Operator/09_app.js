/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// Use spread operator to add between another array
var array1 = [30, 40, 50];
var array2 = [10, 20].concat(array1, [60, 70, 80]);
console.log("array2 : " + array2);
// find the Min of numbers
var numbers = [1, 20, 40, 50, 31, 451, 646, 4646, 464, 64];
var min = Math.min.apply(Math, numbers);
console.log("min : " + min);
// to create a copy of an array
var arr1 = [10, 20, 30, 40, 50];
var arr2 = arr1.slice(); // creates a new copy
arr2 = arr1.slice(); // Creates a new copy again from ES6
console.log("arr2 : " + arr2);
