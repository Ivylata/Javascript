 // var work in global scope like if we declare a variable with var it will be global

//  var num = 45
let num0 = 4000
if(true){
   let num0 = 45 // as it is in the block scope it should not available outside the if scope
   const num1 = 46 //so does this
   // var num = 87
   // console.log("Ineer scope:", num0);
}

// console.log(num0);
// console.log(num1);
//  console.log(num); // but num is availabe not just that it is getting if scope value rather the first one



//++++++++++++++++++++++++++++++++ Looping scope +++++++++++++++++++++++++++++++++++++++++++++

function one() {
   const username = "Ivylata"

   function two(){
      const website = "Youtube"
      console.log(username);
   }
   // console.log(website);
   // two() 
}

// console.log("The one is running:", one()); // output: The one is running: undefined


// scopes in if

if(true){
   const flower = "lotus"

   if(flower === "lotus"){
      const colour = " is pink"

      // console.log(flower + colour);
   }
   // console.log(colour); // the scope has ended with the second if so error

}

// console.log(flower); // out of scope

/* IMPORTANT CONCEPT */
/* in function declaration function can be called before defining but in hosting it can not be*/



addone(5)

function addone(num) // stereotype function declaration
{
   return num + 1
}

addTwo(5)

const addTwo = function(num) // this is called hosting
{
   return num + 2
}

