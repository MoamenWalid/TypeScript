"use strict";
/* Tuple */
const tupleArr1 = [1, "Moamen"];
const tupleArr2 = [1, "Moamen", true];
/* Tuple */
/* Enum */
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 20] = "Medium";
    Size[Size["Large"] = 30] = "Large";
})(Size || (Size = {}));
;
const mySize = Size.Medium;
console.log(mySize);
/* Enum */
/* Functions */
function sum1(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
function sum2(num1, num2) {
    const result = num1 + num2;
    return result;
}
const user1 = {
    id: 1,
    email: "momenelnager@gmail.com",
    password: "12345678",
    isAdmin: true,
    getFullName: (fullName) => fullName
};
/* Objects */
/* Union */
const reviews = false;
function getRating(rating) {
    if (typeof rating === 'number')
        return 123;
    else
        return '123';
}
const newBook = {
    title: "Black Swan",
    description: "About black swan",
    price: 700,
    name: "Nasim Taleb",
    country: "Lebenon",
    email: "nasimtaleb@gmail.com"
};
let price = 10;
/* Literal */
/* Unknown type */
function checkTypes(input) {
    if (typeof input === 'string')
        input.toLowerCase();
    if (typeof input === 'number')
        input.toFixed();
    if (typeof input === 'boolean')
        input.valueOf();
}
/* Unknown type */
/* Never type */
/**
 * the difference between void and never type is:
 * void reach the end of the function, but never dosen't reach it.
 *
 */
function generateError(message) {
    throw new Error(message);
    console.log("Hello");
    const result = 2 + 2;
    console.log(result);
}
/* Never type */ 
