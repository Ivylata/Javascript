const user = {
    username : "Hollad",
    price : 999,

   welComeMsg : function(){
    console.log(`${this.username} welcome haha`);
    //  console.log(this); // rhis refers to current context
   }
}

// user.welComeMsg()

// user.username = "Tom"
// user.welComeMsg();

// console.log(this); 

/* this is refers to an empty object because there are no global context in node environment.
But when we come to browser console the global object is Window so "this" in browser console refers to it*/

// function popCorn() {
// let pop = "PopCorn"
//     console.log(this.pop); // output: undefined as this can not be used in function
// }

// popCorn()

// const popCorn =function (){
//     let pop = "PopCorn"
//     console.log(this.pop); 
// }
// popCorn() // same undefined to identify as it is a function


const popCorn = () => {
         let pop = "PopCorn"
         console.log(this); 
}

// popCorn() // arrow function is same as the function keyword so output undefined

// const addThree = (num1, num2, num3) =>
// {
//     return num1 + num2 + num3 // explicit return type
// }

// const addThree = (num1, num2, num3) => num1 + num2 + num3 // implicit return type declaration

// when we use curly braces return has to be used 

const addThree = (num1, num2, num3) => ({user:"Ivy"}) // object have to in parenthesis in order to be accessed 
console.log(addThree(5,8,7));


