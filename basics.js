console.log("hello typescript");
var a = 10;
console.log(a);
var myArray = ["100", 100];
console.log(myArray);
function myFunction() {
    console.log("hello!");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 20));
var complexObject = {
    data: [10, 20, 30],
    output: function (all) {
        return this.data;
    }
};
console.log(complexObject.output);
