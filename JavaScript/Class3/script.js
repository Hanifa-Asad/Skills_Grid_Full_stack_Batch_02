// prompts
// prompt("Enter your age: ");
// let age = Number(prompt("Enter your age: "));
// console.log("Age is:", age);
// console.log("Type of age is:", typeof age);

//explicit conversion type conversion
// 1. string to number
// let studentAge = "20";
// console.log(studentAge);
// let result = Number(studentAge) + 5;
// console.log("Result of studentAge + 5 is:", result);
// console.log("type of studentAge :", typeof result);

// 2.number to string
// let convertedAge = String(result);
// console.log("Converted age is:", convertedAge);
// console.log("Type of converted age is:", typeof convertedAge);

// 3.boolean
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
//falsy values: 0,-0, "", null, undefined, NaN, false
// truthy values: all other values "hello", 1, -1, [], {}, true, "false"
//parseInt and parseFloat
// let num1 = parseInt("250.52");
// let num2 = parseFloat("250.52");
// console.log("num1 is:", num1);
// console.log("num2 is:", num2);
// console.log(Number("25px"))
// console.log(parseInt("25px"))

//type coercion implicit conversion
// let x = 5;
// let y = x + "5"; // 55
// console.log("y is:", y);
// let a = "5";
// let b = a - 2; // 3
// console.log("b is:", b);
// let c = a * 2; // 10
// console.log("c is:", c);
// let d = a / 2; // 2.5
// console.log("d is:", d);
// let e = 45;
// let f = e + 65;
// console.log("f is:", f);

//shopping bill
let productPrice = Number(prompt("Enter product price: "));
let quantity = Number(prompt("Enter quantity: "));
let totalprice = productPrice * quantity;
console.log("product price is:", productPrice);
console.log("quantity is:", quantity);
console.log("total price is:", totalprice);
console.log("Type of product price is:", typeof productPrice);
let disCount = "10";
let discountAmount = (totalprice * Number(disCount)) / 100;
console.log("discount amount is:", discountAmount);
let finalPrice = totalprice - discountAmount;
console.log("final price is:", finalPrice);
