/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 0; i <= 10; i++) {
    // some statements
}
console.log(i);
for (var j = 0; j <= 10; j++) {
    // some statements
}
//console.log(j); // Error: Cannot find the name 'j'
// Usage of let vs var inside if block
var course = 'Engineering';
if (course === 'Engineering') {
    var job1 = 'Software Engineer';
    var job2 = 'Government';
}
console.log(job1);
//console.log(job2); // Error: Cannot find 'job2'
// Usage Const variable creation
var APP_NAME = 'TS App';
// APP_NAME = 'JS App'; // Cannot assign to read-only prop
