let myDate =  new Date()

// console.log(typeof(myDate)); // Date is an object

// console.log(myDate);
// console.log(myDate.toString()); // output : Tue Sep 05 2023 05:53:51 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // output : Tue Sep 05 2023
// console.log(myDate.toISOString()); // 2023-09-05T05:57:50.442Z
// console.log(myDate.toJSON()); //2023-09-05T05:57:50.442Z
// console.log(myDate.toLocaleDateString()); // 9/5/2023
// console.log(myDate.toLocaleString()); // 9/5/2023, 5:57:50 AM


let myCreatedDate = new Date(2023, 0, 12)
// console.log(myCreatedDate.toString()); // output => Thu Jan 12 2023 00:00:00 GMT+0000

// let myCreatedDate1 = new Date(2023, 0, 14, 5, 8)
// let myCreatedDate1 = new Date("2023-02-15")
let myCreatedDate1 = new Date("2023-15-03")

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // in mili seconds
// console.log(myCreatedDate.getTime()); // date will be converted into mili second
// console.log(Math.floor(Date.now()/1000)); // convert the date into seconds


let newDay = new Date();
// console.log(newDay.getDate());
// console.log(newDay.getDay());
// console.log(newDay.getMonth());
// console.log(newDay.getDay() + 1);// result will Sunday = 1 , Saturday = 2

 // 0 = January because it is an array and array index starts from 0 so does the days



` ${newDay.getDay()} is the day....` // this way we use the day too

newDay.toLocaleString('default', {
    day : "String",
    date : "long",

})