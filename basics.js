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
console.log(complexObject);
var array = [
    {
        "ID": "1",
        "Name": "Hari poorna",
        "Role": "employee"
    },
    {
        "ID": "2",
        "Name": "Tharun",
        "Role": "employee"
    }
];
array.forEach(function (element) {
    console.log(element);
});
array.forEach(function (element) {
    console.log(element.Name);
});
var entriesArray = ['a', 'b', 'c'];
var iterator = entriesArray.entries();
console.log(entriesArray);
for (var _i = 0, iterator_1 = iterator; _i < iterator_1.length; _i++) {
    var e = iterator_1[_i];
    console.log(e);
}
