/* in TS, optional parameters must always be at the end of a function declaration. Optional
parameters can be set with optional chaining or by giving it a predefined value */
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock?: number,
  /* we can use nullish coalesing to add an standard value if we have optional parameters,
  instead of just having an 'undefined' as value */
) => ({id, isNew, stock: stock ?? 0});

console.log(createProduct('66', false, 20)); // { id: '66', isNew: false, stock: 20 }
console.log(createProduct(69)); // { id: 69, isNew: true, stock: 0 }
