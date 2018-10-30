/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
var technologies = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
// Usage of for...in loop from ES5
var result = '';
for (var index in technologies) {
    var value = technologies[index];
    result += value + ' ';
}
console.log(result);
// Usage of forEach Loop from ES5
result = '';
technologies.forEach(function (value) {
    result += value + ' ';
});
console.log(result);
// Usage of for...of loop from ES6
result = '';
for (var _i = 0, technologies_1 = technologies; _i < technologies_1.length; _i++) {
    var value = technologies_1[_i];
    result += value + ' ';
}
console.log(result);
