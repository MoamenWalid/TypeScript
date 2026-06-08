/* Tuple */
const tupleArr1: [number, string] = [1, "Moamen"];
const tupleArr2: [number, string, boolean] = [1, "Moamen", true];
/* Tuple */


/* Enum */
enum Size { Small = 10, Medium = Small * 2, Large = Small * 3 };
const mySize: Size = Size.Medium;
console.log(mySize);
/* Enum */


/* Functions */
function sum1(num1: number, num2: number): void {
  const result = num1 + num2;
  console.log(result);
}
function sum2(num1: number, num2: number): number {
  const result = num1 + num2;
  return result
}
/* Functions */


/* Objects */
// Type Aliase
type User = {
  readonly id: number,
  username?: string,
  email: string,
  password: string,
  isAdmin: boolean,
  getFullName: (fullName: string) => string
}
const user1: User = {
  id: 1,
  email: "momenelnager@gmail.com",
  password: "12345678",
  isAdmin: true,
  getFullName: (fullName: string) => fullName
}
/* Objects */


/* Union */
const reviews: number | string | boolean = false;
function getRating(rating: number | string) {
  if (typeof rating === 'number') return 123;
  else return '123';
}
/* Union */


/* Intersection */
type Details = {
  title: string,
  description: string,
  price: number
}
type Author = {
  name: string,
  country: string
}
type Book = Details & Author & {
  email: string
};
const newBook: Book = {
  title: "Black Swan",
  description: "About black swan",
  price: 700,
  name: "Nasim Taleb",
  country: "Lebenon",
  email: "nasimtaleb@gmail.com"
}
/* Intersection */


/* Literal */
type Price = 10 | 20;
let price: Price = 10;
/* Literal */

/* Unknown type */
function checkTypes(input: unknown): void {
  if (typeof input === 'string') input.toLowerCase();
  if (typeof input === 'number') input.toFixed();
  if (typeof input === 'boolean') input.valueOf();
}
/* Unknown type */


/* Never type */
/**
 * the difference between void and never type is:
 * void reach the end of the function, but never dosen't reach it.
 * 
 */
function generateError(message: string): never {
  throw new Error(message);
  console.log("Hello");
  const result = 2 + 2;
  console.log(result);
}
/* Never type */