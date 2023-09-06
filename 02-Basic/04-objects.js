// empty objects can define :

// const user1 = new Object() // method 1 : singleton object
 const user1 = {} // method 2 : non-singleton object
 user1.isLoggedIn = true;
 user1.email = "abs@gmail.com"
 user1.Id = "145abs"
 user1.name = "Vaarat"

// console.log(user1);

const otherUSer ={
    email: "something.gmail.com",
    fullname:{
        username:{
            firstname: "Ram",
            middlename: "Mohan",
        },
        userSurname:{
            familyName: "Roy",
        }
    }
} // nested object

// console.log(otherUSer.fullname.username);

const obj1 = {
    1:"a", 2:"b", 3:"c"
}
const obj2 = {
    4:"A", 5:"B"
}
//  const obj3 = {obj1, obj2}
// console.log(obj3);
 /* output object into object:  {
    obj1: { '1': 'a', '2': 'b', '3': 'c' },
    obj2: { '4': 'A', '5': 'B' }
  } */
  
//  const obj3 = {...obj1, ...obj2} // spread method
//  console.log(obj3); // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'A', '5': 'B' }

const obj3 = Object.assign ({}, obj1, obj2) //  object assign returns so we have to store it into another variable
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'A', '5': 'B' }

/* assign method structure : Object.assign( target , source) when there are more sources then as a target a empty object is 
given as a professional practice*/

const users = [
    {
        id:1,
        email:"meu@mail.com"
    },
    {
        id:2,
        email:"vue@mail.com"
    }
    
] // array of object structure
// to access 
console.log(users[1].id);

console.log(Object.keys(otherUSer)); // keys are put into an array: [ 'email', 'fullname' ]
console.log(Object.values(otherUSer)); 
console.log(Object.entries(user1));// will return key-value pair array
/* output =>
[
  [ 'isLoggedIn', true ],
  [ 'email', 'abs@gmail.com' ],
  [ 'Id', '145abs' ],
  [ 'name', 'Vaarat' ]
]*/

console.log(user1.hasOwnProperty("Id")); // if the value exist in object then true else false




