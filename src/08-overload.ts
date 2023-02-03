// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

/* here, we have a function that either receives and outputs a string or an array of strings. But,
if it receives a string, it should output an array of strings and viceversa */
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split('') // string[]
  }
}

/* the problem is that, becase parseStr recieves and outputs either one of those types, it doesn't
actually infere what type it is outputting because TS can't infere the logic behind parseStr. */
const rtaArray = parseStr('Nico');
const rtaStr = parseStr([...rtaArray]);

/* if we wanted to use methods specific for strings or arrays, we can't because TS inferes that
the output is either a string or array, so it shows us methods that are shared between both
strings and arrays. This can also give us other errors along the way because correct typing can't
be inferred. To fix this, we use function overide */
rtaArray.concat
rtaStr.indexOf

console.log('Nico = ', rtaArray); // Nico =  [ 'N', 'i', 'c', 'o' ]
console.log(rtaArray, '=', rtaStr); // [ 'N', 'i', 'c', 'o' ] = Nico

//
//
/* an overload looks like this, where we specify which type of value to output depending on the
input's type. This also works with class methods */
function parseStrV2(input: string): string[];
function parseStrV2(input: string[]): string;

function parseStrV2(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split('') // string[]
  }
}

/* now we can use the methods we expect with rtaArrayV2 && rtaStrV2 depending on parseStrV2's argument */
const rtaArrayV2 = parseStrV2('Nico');
rtaArrayV2.reverse();
const rtaStrV2 = (parseStrV2([...rtaArrayV2])).toLowerCase();

console.log('Nico = ', rtaArrayV2); // Nico =  [ 'o', 'c', 'i', 'N' ]
console.log(rtaArrayV2, '=', rtaStrV2); // [ 'o', 'c', 'i', 'N' ] = ocin
