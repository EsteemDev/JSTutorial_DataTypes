// JavaScript DataTypes :

// 1- string
// 2- number
// 3- Bigint
// 4- boolean
// 5- Undefined
// 6- null
// 7- Symbol
// 8- Object : 1-object 2-array 3-date

// JavaScript Types Are Dynamic
let Dynamic; // undefined
console.log(Dynamic);
Dynamic = "EsteemDev" // string
console.log(Dynamic);
Dynamic = 10; // number
console.log(Dynamic);

// string
let string1 = "Hello '";
let string2 = 'Hello "';

// number
let number1 = 10;
let number2 = 15.3;
// let x = 1350000000
let x1 = 135e7; // result : 1350000000
console.log(x1);
// let x = 0.00000147
let x2 = 147e-8; // result : 0.00000147
console.log(x2);

// Bigint
let bigint = BigInt("123456789012345678901234567890123456789012345678901234567890");

// boolean
let _true = true;
let _false = false;
let n1 = 5;
let n2 = 6;
let n3 = 5;
let booltest1 = (n1==n2) // false
let booltest2 = (n1 == n3) // true

// Objects:

// object
let person = {
    firstname : "firstname",
    lastname : "lastname",
    age : 32
};

console.log(person); // Result : object - {firstname: 'firstname', lastname: 'lastname', age: 32}
console.log(person.age); // Result : 32
person.age = 50;
console.log(person.age); // Result : 50

// Array Object
let letters = ["a","b","c"];
console.log(letters); // Result : (3) ['a', 'b', 'c']
console.log(letters[0]); // Result : a
letters[0] = "c";
console.log(letters[0]); // Result : c
let array = ["name",14.5,true];
console.log(array); // Result : (3) ['name', 14.5, true]

// Date Object
let date = new Date("2023-04-08");
console.log(date); // Result : Sat Apr 08 2023 03:30:00 GMT+0330 (Iran Standard Time)

//
let test = "EsteemDev" + 402;
console.log(test); // Result : EsteemDev402
let test2 = "test " + true 
console.log(test2); // Result : test true
let test3 = 5 +10 + "test";
console.log(test3) // Result : 15test
let test4 = "test" + 5 + 10;
console.log(test4); // Result : test510

// typeof
console.log(typeof "string"); // string
console.log(typeof array); // object
console.log(typeof 123); // number
console.log(typeof date); // object
console.log(typeof true); // boolean
console.log(typeof person); // object