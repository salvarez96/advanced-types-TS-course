/* never is used when a function would never fulfill, like an infinite loop */
const noEnd = () => {
  while(true) {
    console.log('never stop learning');
  }
}

/* but, functions that throw error messasges are also never types because, if the error function
is fulfilled, the program fails */
const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'you have a string'
  /* this is how an unknown variable is verified as an array: */
  } else if (Array.isArray(input)) {
    return 'you have an array'
  }
  return fail('you fd up');
}

console.log(example('sup'));
console.log(example([1,2,3]));
console.log(example(1)); // app would end here because fail() is called
console.log(example('sup again')); // this won't happen

/* never is useful by letting us know when a function is never going to stop, like an error
function or a function that never finishes executing itself */
