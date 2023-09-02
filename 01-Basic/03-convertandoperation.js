let score ="33abc"// it is not a number type but type conversion will say it is number..
//console.log(typeof score);
let scoreTonumber = Number(score)
//console.log(typeof scoreTonumber) // it will say score is number 
//console.log(scoreTonumber) // it will say the truth that it not a number aka NaN


let phoneNum = "568974"
//console.log(typeof(phoneNum))
let changeNum = Number(phoneNum)
//console.log(typeof changeNum)

// some cases of to Number conversion

let temp = null;
let tempChange = Number(temp)
//console.log(tempChange) // it will give output 0

let address = undefined
let addressChange = Number(address)
//console.log(addressChange) //It will give output as NaN

let name = "Bora"
let nameChange = Number(name)
//console.log(nameChange) // It will give output as NaN

let inAcc = true;
let inAccchange =  Number(inAcc)
//console.log(inAccchange) // it will give true as an 1 and false as an 0


// some cases of to Boolean conversion

let place= "";
let changePlace = Boolean(place)
//console.log(changePlace);
// it will give "" => false and "ivylata" => true

let isIn = 1
let changeIsin = Boolean(isIn)
//console.log(changeIsin)
// it will give 1 =. true and 0 => false

let aNumber = 55
let changeNumber = String(aNumber)
// console.log(typeof changeNumber)
// console.log(changeNumber)

// it will give changeNumber as 55 but typeof changeNumber will say it is actually a string type


// ***OPERATIONS***

let a = 6;
let b = -a
// console.log(b)

//string addition
let str1 = "ivy";
let str2 = " das";
let str3 = str1+ str2;
// console.log(str3); // output => ivy das 

// console.log("1" + 2 + 2); // output => 122 ECMA script rule
// console.log(1 + 2 + "2");// output => 32 same ECMA script rule


// console.log(+true); // output => 1
// console.log(+false);// output => 0
// console.log(+"");// output =>0


let gameScore = 100
++ gameScore;
console.log(gameScore);
gameScore++;
console.log(gameScore);