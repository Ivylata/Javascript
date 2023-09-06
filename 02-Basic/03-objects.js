// singleton objects are one of it's kind when we create objects with constructor
//Object.create // this is the method to create object with constructor


const mySym =Symbol("Key1") // usage how can we use symbol as an object key


//onject literals
const myUser = {
    name: "Ivy",
    [mySym] : "myKeyValue", // this is syntax to use symbol as a key
    age: 16,
    location: "Kolkata",
    email: "Ivy@yahoo.com",
    isLoggedIn: false,
    loggedInDetails: ["Monday", "Saturday"],
    "full name" : "Ivylata"
}

// how to access objects:

// console.log(myUser.email); // not prefered method
// console.log(myUser["email"]); /* all the keys are processed as if it's a string name is processed "name" email is prossed as "email"
//                                  so when we access values of object with[] we have to define it within [""] */

    // console.log(myUser["full name"]); /* here as we've already set a key as a string we cannot access it with . */
    // console.log(myUser[mySym]); // this the method to access synbol as a key
    

    // to change object value
    myUser.name = "Fanny"

    // to freeze the object values
    // Object.freeze(myUser);
    myUser.name = "Ivy"// no changes will be done

    // console.log(myUser);

    myUser.greetings = function(){
        console.log("Hello");
    }

    console.log(myUser.greetings); // output => [Function (anonymous)]

    myUser.greetingsTwo = function(){
        console.log(`Hello user ${this.name}`); // with string interpolation technique
    }

    console.log(myUser.greetingsTwo());
  
