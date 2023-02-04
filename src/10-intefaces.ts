type Size = 'S' | 'M' | 'L' | 'XL';

// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Size;
// }

/* interfaces have almost the same structure as typing what would be an object. Indeed, interfaces
are used to type objects and classes because interfaces need a body, in contrast with types that
only need one single line of code. But, really the only difference between both, is that
interfaces can be extended, while types are fixed. Interfaces are extended how classes extend
other classes */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Size;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 10,
  size: 'L'
});
