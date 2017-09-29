var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function c(){
//     var a = 10;
//     let b = 20;
//     console.log(a);
//     console.log(b);
//     if(a>5){
//         console.log(b);
//     }
// }
// c();
var a = 10;
var b = "hari";
console.log(typeof (a));
console.log(typeof (b));
function c() {
    var a = "something";
    console.log(a);
}
c();
var list = ["a", "b", "c", "d"];
var anotherList = ["1", "2", "3", "4"];
list.forEach(function (element) {
    console.log(element);
});
var myObject = {};
anotherList.forEach(function (element) {
    // console.log(element);
    if (element == "3") {
        console.log(element);
        myObject.value = element;
    }
});
console.log(myObject);
function multiply(number1, number2) {
    return number1 * number2;
}
console.log(multiply(10, 20));
function dummy() {
    console.log("this is a non returnable fucntion");
}
// multiply = dummy;
console.log(multiply(20, 30));
var Person = (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log(this.age);
    };
    Person.prototype.setRole = function (role) {
        console.log(role);
    };
    return Person;
}());
var person = new Person("Hari", "Hari1234");
var employee = new Person("rajesh", "raju123");
console.log(person.name, person.username);
console.log(employee.name);
person.setAge(27);
// person.setRole("employee"); "it wont be acceses out side the class"
var variable = 10000;
console.log(variable);
variable = 10;
console.log(variable);
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Person));
var student = new Student("suresh", "poorna12324");
console.log(student.name);
