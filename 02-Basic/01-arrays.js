//+++++++++++++++++++++++++++++++++++ array +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//read documentation of array from MDN

// shallow copy : copy and main array shares same reference so commit changes will appear in both
//deep copy : copy means different stack memory concept

const myArray1 = [0, 1, 2, 3, 4, 5]
const  myArray2 = new Array(6, 7, 8, 9)
 // two ways to define array



//  Array methods

// myArray1.push(6)
// myArray1.push(10)
// myArray2.pop()

// myArray1.unshift(8); // add 8 in the 0th index
// myArray2.shift() // remove the 0th indexed element

// console.log(myArray1.includes(8));
// console.log(myArray1.indexOf(9));


// const arr = myArray1.join() // convert the array into a string

// console.log(myArray1);
// console.log(arr);
// console.log(typeof arr); //output : string


let arr1 = myArray1.slice(1,3); // does not manipulate original array
console.log("A : ", myArray1);
console.log(arr1);

console.log("B : ", myArray1);

let arr2 = myArray1.splice(0,3); // manipulate original array
console.log("C : ", myArray1);
console.log(arr2);





