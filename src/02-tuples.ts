/* 'flexible' way of typing arrays */
const prices: (number | string)[] = [1,2,3,4, 'lol'];

/* tuples are a way of creating strictly typed arrays where we specify the amount of elements
an array can contain as well as each of them's type */
const data: [number, number, string, string?] = [1,2,'sup'];
/* position 3 of data is an optional string */

/* destructuring a tuple */
const [number1, number2, theString, lastString] = data;

console.log(number1);
console.log(number2);
console.log(theString);
console.log(lastString);
