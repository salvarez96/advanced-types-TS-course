let anyVar: any;
anyVar = true;
anyVar = 12;
anyVar = 'hi';
anyVar = [];

/* even if we add strict type to the variable isNew, TS doesn't gives us an error if we add
anyVar as its value because anyVar has any type, which means that it can be a boolean, or not */
let isNew: boolean = anyVar;
console.log(isNew); // []

/* we can also use any type of property/method we want, even if it doesn't exist, and TS won't
warn us about it */
anyVar.sayHi();
anyVar.push();

let anUnknownVar: unknown;
anUnknownVar = true;
anUnknownVar = 12;
anUnknownVar = 'hi';
anUnknownVar = [];
/* when using type unknown, TS warn us when we try to do something like this: */
// anUnknownVar.push()
// anUnknownVar.toUpperCase()
/* TS would want us to first make a type verification before working with a variable's methods
or properties. To verify types, we can do this: */
if (typeof anUnknownVar === 'string') {
  anUnknownVar.toLowerCase();
} else if (typeof anUnknownVar === 'number') {
  anUnknownVar.toFixed(1);
}
/* now TS won't warn us if we use specific properties/methods for a given type of data */

/* and TS would also warn us when doing this: */
// let isNew2: boolean = anUnknownVar;
/* because unknown is not assignable to type boolean. For this to work, type verification is
required */
