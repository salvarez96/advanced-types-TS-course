import { Product } from "./products/product.model";
import { addProduct } from "./products/product.service";

const product1: Product = {
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 10,
  category: {
    id: 1,
    title: 'cat1',
    createdAt: new Date(),
  }
}

addProduct(product1);
