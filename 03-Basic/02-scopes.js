 // var work in global scope like if we declare a variable with var it will be global

//  var num = 45
let num0 = 4000
if(true){
   let num0 = 45 // as it is in the block scope it should not available outside the if scope
   const num1 = 46 //so does this
   // var num = 87
   console.log("Ineer scope:", num0);
}

console.log(num0);
// console.log(num1);
//  console.log(num); // but num is availabe not just that it is getting if scope value rather the first one