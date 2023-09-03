// There are two types of datatypes

// Primiive types : string, number, boolean, null, undefined, symbol, Bigint

const vill = "Bhogpur";
const mobile = 123456;
const book = null;
let noteBook;
let userId1 = Symbol('123')
let userId2 = Symbol('123')
// console.log(userId1 === userId2);
// the out will be false because symbol is used to identify uniqueness and though the values are it is uniquely differentiated

//Reference type aka non-Primitive :  array, object, functions

let myArray = ["Ram", "Sam", "Jodu"];

let myObj = {
    name:"ivy",
    age: 5,
}

const myFunc = function(){
    console.log("Hello World");
}

// console.log(typeof myFunc); // type: function it is termed as object function type


