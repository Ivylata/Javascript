const score = 100
// console.log(score)

let anotherScore = new Number(400);
// console.log(anotherScore);

// console.log(anotherScore.toString());
// console.log(anotherScore.toString().length);


// console.log(anotherScore.toFixed(3)); // output:400.000

const result = 500000
// console.log(result.toLocaleString('en-IN')) // Indian standard value wise comma will be assigned

const floatNum = 123.84569
// console.log(floatNum.toPrecision(3)); // output will be : 124
// console.log(floatNum.toPrecision(4)); // output will be : 123.8
// does precisely roundoff


//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math); // it is an object type

// console.log(Math.round(6.5)); // roundoff
// console.log(Math.abs(-6)); // abs value 
// console.log(Math.ceil(6.5)); // celling value
// console.log(Math.floor(6.5)); // flooer or lowest point

// console.log((Math.max(4,6,9,8,7))); // max in an array
// console.log((Math.min(4,2,7,8,1,3))); // min in an array


// console.log(Math.random()); // it will generate random number between 0-1
// console.log(Math.random()*10); // it will give first number after the .
// console.log((Math.random()*10) + 1); // if the first number after . is 0 it will turn it into 1
// console.log(Math.floor((Math.random()*10) + 1)); // will round off and generate the floor value

const minNum = 10
const maxNum = 20
 console.log(Math.floor(Math.random() * (maxNum - minNum +1)) + minNum);

 /*Formula explanation : to get random number between minNum and maxNum we use Math.random to get the roundoff minimum value
 we used Math.floor. As random generate number between 0-1 we * it with (maxNum-minNum) and to avoid 0 we + 1
 But the number still less than minNum so we just simply + minNum to get in between the range  */