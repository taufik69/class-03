/**
 * todo : data type on js
 * todo : primitve and non primitve
 * todo : primitve
 * todo : non-primitve  --> array , object , function
 *
 */

// 1st step

// let MyFirstArray = new Array();

// let nam = "taufik";
// let number = 23;

// let myFirstArray = ["taufik", 2342, true, "world", "hello", false];
// let jsPeople = [
//     "mohima ",
//     "jahid ",
//     "redowan",
//     "Mushira ",
//     "Nusrat",
//     "Mahya",
//     "Tamzid",
//     "taufik",
//   ];

// console.log(jsPeople[]);
// myFirstArray[0] = "Tasin sultana sorna";
// myFirstArray[1] = "apatoto keo nai";
// myFirstArray[9] = false;

// myFirstArray.shift();
// myFirstArray.unshift(37948598);

// myFirstArray.pop();
// myFirstArray.push("sadkfj");

// myFirstArray.splice(3, 1);
// let newarray = myFirstArray.join(" <---1--> ");
// delete myFirstArray[0];
// add 2 array

// console.log(myFirstArray.concat(jsPeople));
// console.log(jsPeople);

// ----> loop ----> for loop

// 1st step initialization let i = 0;
// 2nd step conditon checking i < 100;
// 3rd step increment and decrement i++ , --i

// for (let i = 2024; i >= 1; i--) {
//   console.log(i + "taufik");
// }

// namta program

// 10 X 1 = 10
// 10 X 10 = 100
// let y = 10;
// let x = `hello ${y} `;
// let x = "hello " + y;
// let namta = 5000000000;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${namta} X ${i} = ${namta * i}`);
// }

/**
 * todo : assignment : ekta array thakbe , array er moode 10 ta element thakbe ,
 * todo : 10 ta element browser show korben using loop
 * todo : let [1,2,3     10  , 49]
 * todo : array.lenght  --> show total item number
 * todo : 1 ta for loop
 * todo : condition a array.length i < array.length
 * todo : loop er execution body te total array item list golan show koraben
 * todo : arr[0] ---> show the array item
 */

// let jsPeople = [
//     "mohima ",
//     "jahid ",
//     "redowan",
//     "Mushira ",
//     "Nusrat",
//     "Mahya",
//     "Tamzid",
//     "taufik",
//   ];

//   jsPeople[0] ----> "mohima"

/**
 *
 * todo : previous class we discuss some method of array
 * todo : today we discuss some string built in method
 * todo : lastly we have enough time then we make a if else if conditon and switch conditon
 *
 */

// let x = "ABCDEFGH";
// let y = "Mir Faysal Sir";
// console.log(y.charAt(4));
// console.log(y.charCodeAt(1));

/**
 * todo : slice(startPoint , endPoint)
 * todo : subString(startPoint , endPoint)
 * todo : replace("target" , "replace value")
 * todo : trim()
 * todo : toUpperCase()
 * todo : toLowerCase ()
 * todo : concat()
 */

// console.log(y.slice(0, 5));
// console.log(y.substring(3, 10));
// console.log(y.substr(3));

// let x = "I LOVE JAVASCRIPT";
// let y = "i love javascript";
// let result = x.replaceAll("love", "hate");
// let uppercase = x.toUpperCase();
// let convertLowercase = x.toLowerCase();
// let convertLowercase = x.toLocaleLowerCase();
// let trim = x.trim();
// let trim = x.trimEnd();
// console.log(trim);

// concat method in string

// let x = "taufik";
// let y = " sorna";

// let addingEx = x.concat(y);
// console.log(addingEx);

/**
 * * if else else if and switch statement
 * todo : voting system mini project
 * ! : it's called a conditional statement
 *
 */

// let a = 12;
// if (a == 10) {
//   //---> boolean context check true and fasle
//   // this portion or carley braces called a execution context
//   console.log("Yes i charming in if coditons");
// } else if (a == 12) {
//   console.log("ha 12 paice tai milce r ami print hoici");
// } else {
//   console.log("true hoi nai tai se niche acce");
// }

// let nam = "";
// let email = "";
// let phoneNumber = "";
// let commnet = "";

// if (nam) {
//   console.log("yes name field is populated / fillup");
// } else if (email) {
//   console.log("email ase ");
// } else if (phoneNumber) {
//   console.log("phoneNumber ase ");
// } else if (commnet) {
//   console.log("commnet ase");
// } else {
//   console.log("user kono from fillup kore nai");
// }

// let age = prompt("Enter your age:");
// let numberAge = Number(age);

// if (numberAge === 18) {
//   console.log("tomi vote dite parba");
// } else if (numberAge >= 18 && numberAge <= 79) {
//   console.log("vote deyar jonno tomi ekbare prepared");
// } else if (numberAge < 18) {
//   console.log("tomar ekhon oo boyos hoi nai , tmr ammur kase chole jao baba");
// } else if (numberAge >= 80) {
//   console.log("Allah Allah kor vai toi , tore vote dite hobe na");
// } else {
//   console.log("system falut");
// }

/**
 * todo : switch statement another form of if else condition
 
 */

// let x = "music";
// switch (x) {
//   case "fan": {
//     console.log("Fan start");
//     break;
//   }
//   case "Bulb": {
//     console.log("Bulb start");
//     break;
//   }
//   case "Ac": {
//     console.log("AC start");
//     break;
//   }
//   case "pc": {
//     console.log("Pc on");
//     break;
//   }
//   case "music": {
//     console.log("music play");
//     break;
//   }
//   default: {
//     console.log("tomi jeita khojtaco seita ei khan a nai");
//   }
// }

/**
 * todo:  argument object
 *
 * */

// function func1(a, b, c) {
/**
 * todo : mutant argument value
 */

//   console.log((arguments[0] = "sorna"));
//   console.log(typeof arguments);
//   console.log("Arguments length", arguments.length);
//   console.log(arguments[0]);
//   // Expected output: 1

//   console.log(arguments[1]);
//   // Expected output: 2

//   console.log(arguments[2]);
//   // Expected output: 3
// }

// func1("taufik", 2, 3);

// function myConcat(separator) {
//   console.log("arguments: ", arguments);
//   console.log("sepeattor: ", separator);
//   const args = Array.prototype.slice.call(arguments, 1);
//   const args = [...arguments];
//   return args.join(separator);
// }

// let result = myConcat(", ", "red", "orange", "blue");
// console.log(result);

/**
 * todo: function and all possible function types
 * * function Name : normal function , arrow function , annomoys function , IIFE funciton
 */

// Normal function

// function kodJo(pera) {

//   console.log("jodo charming in jodu funciton", pera);
// }

// kodo("aklstdj"); //fucntion arguments/ perameter
// // for (let i = 0; i < 10; i++) {
// //   jodo();
// // }
