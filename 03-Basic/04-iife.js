//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// global scopes can issue pollutions in function scopes in order to avoid iife is used

 (function okie() // named IIFE
 {
    console.log(`DB connected`);
 }) ();  // iife declaration

// if we do not put the ; in there it will be an error as it doesn't know where to to end context

 ( function (){
    console.log(`Again connected`);
 }) ();

 ( () =>{
    console.log(`Again connected 1`);
 }) ();

 /* iife works with both arrow function and function function but as it cannot figure out where to end context
  we have to add an ; to make this understand 
  TWO IIFE WRITING STNTAX*/

  ( (name) =>{
    console.log(`Again connected 1 ${name}`);
 }) ("Ivy") // parametered IIFE


