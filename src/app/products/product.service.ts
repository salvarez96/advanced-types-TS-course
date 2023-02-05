import { faker } from "@faker-js/faker";
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "./product.dto";
import { Product, Size } from "./product.model";
import { BaseModel } from "../base.model";

export const products: Product[] = [];

export const sizesArr: Size[] = ['S', 'M', 'L', 'XL'];

export const giveRandomNumber = (id: 'stock' | 'price') => {
  if (id === 'stock') {
    return faker.datatype.number({min: 10, max: 80});
  } else {
    return faker.datatype.number({min: 20, max: 1500});
  }
}

export const addProduct = (data: CreateProductDTO) => {
  /* all this new data in newData is what a DDBB is supossed to automatically assign when we
  create a new product. But, because we're not working with one, we'll assign it here */
  const newData: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      title: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newData);
  return newData;
}

export const getProductIndex = (id: Product['id']) => {
  return products.findIndex(product => product.id === id);
}

export const findProducts = (dto: FindProductDTO): Product[] => {
  // const productIndex = getProductIndex(id);
  return products;
}

export const deleteProduct = (id: Product['id']) => {
  const productToDelete = getProductIndex(id);
  return products.splice(productToDelete, 1);
}

/* In TS, we can access specific properties from an already existing object type or interface
to use its property's type. This is known as 'indexed access types' We do it like: Type['property']. Example:*/
export const updateProduct = (id: Product['id'], changes: UpdateProductDTO) => {
  const productToChangeIndex = getProductIndex(id);
  const productToChange = products[productToChangeIndex];
  products[productToChangeIndex] = {
    ...productToChange,
    ...changes,
    updatedAt: faker.date.recent()
  };
  return products[productToChangeIndex];
}
