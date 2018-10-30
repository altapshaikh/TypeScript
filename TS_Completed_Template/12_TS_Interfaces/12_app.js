var student1 = {
    name: 'Rajan',
    age: 20,
    course: 'Engg',
    address: {
        city: 'Hyderabad',
        state: 'TS',
        country: 'India'
    }
};
function printStudent(student) {
    console.log("name : " + student.name + ",\n                age : " + student.age + ",\n                course : " + student.course + ",\n                Address : " + student.address + "\n    ");
}
printStudent(student1);
