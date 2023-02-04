import { User } from "../../lectures/01-enum";
import { Product } from "../products/product.model"

export interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
