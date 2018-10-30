/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
// Normal 1
var greetNormal = function () {
    return "Good Morning";
};
console.log("Normal 1 : " + greetNormal());
var greetArrow = function () { return 'Good Morning'; };
console.log("Arrow 1 : " + greetArrow());
// Normal function with Args and Arrow Function
var greetArgsNormal = function (name) {
    return "Good Morning " + name;
};
console.log("Normal 2 : " + greetArgsNormal('John'));
var greetArgsArrow = function (name) { return "Good morning " + name; };
console.log("Arrow 2 : " + greetArgsArrow('John'));
// Normal function to find the sum of two numbers with Arrow Function
var addNormal = function (a, b) {
    return a + b;
};
console.log("Normal 3 : " + addNormal(10, 20));
var addArrow = function (a, b) { return a + b; };
console.log("Arrow 3 : " + addArrow(10, 20));
// Normal function to find the length of an array with Arrow Function
var array = [10, 20, 30, 40, 50];
var lenNormal = function (array) {
    return array.length;
};
console.log("Normal 4 : " + lenNormal(array));
var lenArrow = function (array) { return array.length; };
console.log("Arrow 4 : " + lenArrow(array));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
