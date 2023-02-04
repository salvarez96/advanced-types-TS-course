import { faker } from "@faker-js/faker";
import { Product, Size } from "./product.model";

export const products: Product[] = [];

export const sizesArr: Size[] = ['S', 'M', 'L', 'XL'];

export const giveRandomNumber = (id: 'stock' | 'price') => {
  if (id === 'stock') {
    return faker.datatype.number({min: 10, max: 80});
  } else {
    return faker.datatype.number({min: 20, max: 1500});
  }
}

export const addProduct = (data: Product) => {
  products.push(data);
}

export const getProduct = (id: string) => {
  return products.findIndex(product => product.id === id);
}

export const findProduct = (id: string) => {
  const productIndex = getProduct(id);
  return products[productIndex];
}

export const deleteProduct = (id: string) => {
  const productToDelete = getProduct(id);
  return products.splice(productToDelete, 1);
}

export const updateProduct = (id: string, changes: Product) => {
  const productToChange = getProduct(id);
  products.splice(productToChange, 1, changes);
  return products[productToChange];
}
