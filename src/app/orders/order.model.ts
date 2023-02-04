import { User } from "../../lectures/01-enum";
import { BaseModel } from "../base.model";
import { Product } from "../products/product.model"

export interface Order extends BaseModel{
  products: Product[];
  user: User;
}
