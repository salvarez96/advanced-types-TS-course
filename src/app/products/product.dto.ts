/* it is good practice that al DTOs are in a separate file */
import { Product } from "./product.model";
/* here we're creating a utility type of Product only with the DTO parameters we need from
Product */
// type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
/* but, to correctly use a utility type, we create an interface that extends from the omit: */
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
