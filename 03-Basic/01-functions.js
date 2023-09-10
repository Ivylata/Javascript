function sayMyName(){
    console.log("ivylata");
}

sayMyName //this is call function reference
//sayMyName() // function execution : function reference +()

// function addTwoNum(num1, num2){
//  console.log(num1+num2);
// }

// addTwoNum(); // as we didn't pass any arguments it gave us NaN as an output
// const result =  addTwoNum(5, 6)

// console.log(result) // as we didn't return anything in the function it is giving undefined as output

function addTwoNum(num1, num2){
    //  let result = num1 + num2;
    //  return result // after return console log can not be done it will say it is unreachable
    return num1+num2
    }

    const result = addTwoNum(16,20)
    // console.log(result);

    function userLoginMsg(username = "ivy") // ivy is assigned as a default value
    {
        // if(username === undefined) 
        if(!username){
            console.log("Please enter an username");
            return // if we enter the if block then first return will execute so second will not
        }
        return `${username} just logged in`
    }

    // console.log(userLoginMsg("ivylata"));
    // console.log(userLoginMsg()); // output: undefined just logged in

    function addItemCart(val2,...item) // ... is Rest operator
    {
        return item // it will return the rest operator value
    }

    // console.log(addItemCart(50,78,66));

    const user = {
       username:"sunmi",
       price: 200

    }

    function cartDetails(anyobject){
        console.log(`Dear ${anyobject.username} your product price is ${anyobject.price}`);
    }

    // cartDetails(user)
    cartDetails({
        username:"Bora",
        price:399
    })

    const cartArr = [400, 500, 700, 800]
    function cartSecondItem(anyArr){
        // console.log(`${anyArr[1]}`);
        return anyArr[1]
    }
    console.log(cartSecondItem(cartArr)); 
    console.log(cartSecondItem([400, 900, 450, 123])); 