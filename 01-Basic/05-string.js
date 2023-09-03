const name = "Ivy"
const myRepocount = 10
// console.log(name + myRepocount + "okay");// not recomended type string concat

console.log(`My name is ${name} and my repo count is ${myRepocount}`); // string interpolation method highly recomended

//create string as an object
const myString = new String("Hello");// every word is saved as key value pair

console.log(myString[0]);
// console.log(myString.__proto__);
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.charAt(3));
// console.log(myString.indexOf('E'));//output => -1 as E is not in there
// console.log(myString.indexOf('e'));//output =>1

let game ="Super-Mario-Video-Game"
let gameSub = game.substring(1,4);
console.log(gameSub);

let gameSlice = game.slice(-8,4);//it can have negative index also
console.log(gameSlice);

let email = "     ivy@mail.com     "
console.log(email);
console.log(email.trim());// it will eliminate unnecessary spaces 

const url = "https://ivy%52das"
console.log(url.replace('%',';)')); // replace the given with the given
console.log((url.includes('ivy')));//check if given is included or not
console.log(game.split('-'));// split the string as per given element here we gave "-"