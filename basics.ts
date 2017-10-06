console.log("hello typescript");
let a =  10;

console.log(a);
let myArray: [string, number] = ["100", 100];

console.log(myArray);
function myFunction(): void{
    console.log("hello!");
}
function multiply(value1:number,value2:number):number{
    return value1*value2;
}
console.log(multiply(10,20));
let complexObject:{data:number[], output:(all:boolean)=>number[]} = {
    data :[10,20,30],
    output : function(all:boolean):number[]{
        return this.data;
    }
}
console.log(complexObject);