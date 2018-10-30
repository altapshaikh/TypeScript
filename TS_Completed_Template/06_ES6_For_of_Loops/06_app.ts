/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

let technologies:Array<string> = ['HTML','CSS','JavaScript','JQuery','Bootstrap'];

// Usage of for...in loop from ES5
let result:string = '';
for(let index in technologies){
    let value = technologies[index];
    result += value + ' ';
}
console.log(result);

// Usage of forEach Loop from ES5
result = '';
technologies.forEach(function(value) {
    result += value + ' ';
});
console.log(result);

// Usage of for...of loop from ES6
result = '';
for(let value of technologies){
    result += value + ' ';
}
console.log(result);
