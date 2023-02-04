import { faker } from "@faker-js/faker";
import { Product, Size } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data)
}

export const sizesArr: Size[] = ['S', 'M', 'L', 'XL'];

export const giveRandomNumber = (id: 'stock' | 'price') => {
  if (id === 'stock') {
    return faker.datatype.number({min: 10, max: 80});
  } else {
    return faker.datatype.number({min: 20, max: 1500});
  }
}
