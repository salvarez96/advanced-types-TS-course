import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Size = 'S' | 'M' | 'L' | 'XL';

/* here: we use inheritance to extend the properties of an interface to another, just like in
OOP */
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Size;
  category: Category
}
