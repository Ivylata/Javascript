// console.log("2"> 1);
// console.log(2>"1");
//both results are true because the conversion is done by js itself

// console.log(null>0); // output => false
// console.log(null==0); // output => false
// console.log(null == 0)//output => false
// console.log(null>=0); 
/* output => true ;because assigning operator work differently
 it will make a conversion and make null a number and treat it as 0 so true as output*/

//  console.log(undefined>null);
//  console.log(undefined>0);
//  console.log(undefined<0);
//  console.log(undefined==0);
 //all answer will be false
// ******* This type of checking should be always avoided in order to get clean coding

 //strict check ===, it will check data type also
console.log("2" === 2);
