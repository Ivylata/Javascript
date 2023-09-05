const flowers = ["rose", "lotus", "aster"]
const fruits = ["mango", "banana", "apple"]

// flowers.push(fruits) // works on existing array
// console.log(flowers); // [ 'rose', 'lotus', 'aster', [ 'mango', 'banana', 'apple' ] ] array into array
//  console.log(flowers[3][2]); // output : apple


// let concatArr = flowers.concat(fruits) // works on new array
// console.log(concatArr); //[ 'rose', 'lotus', 'aster', 'mango', 'banana', 'apple' ]

// let fruitsandflower = [...flowers, ...fruits]// spread method
// console.log(fruitsandflower); // [ 'rose', 'lotus', 'aster', 'mango', 'banana', 'apple' ]

// let multiArr = [1, 2, 3, [6, 7, 8], 9,[10,[4,5]]]
// let flatMultiArr = multiArr.flat(Infinity)
// console.log(flatMultiArr); /*[
/*   [ 1, 2,  3, 6, 7,
    8, 9, 10, 4, 5
  ]

  converted the whole array into a single array
  */


 console.log(Array.isArray("Ivylata")); // false
 // to convert this into an array
 console.log(Array.from("Ivylata")); 


 // to convert object into a array we have define which part key or value has to be in array form

 console.log(Array.from({name:"Ivylata",})); // it will return an empty array as it failed to identify which part to turn into an array

 let el1 = 200
 let el2 = 400
 let el3 = 600
 let el4 = 800

 console.log(Array.of(el1, el2, el3, el4)); // will turn individual elements into one sinhle array o/t: [ 200, 400, 600, 800 ]