/* it is good practice that al DTOs are in a separate file */
import { Product } from "./product.model";
/* here we're creating a utility type of Product only with the DTO parameters we need from
Product */
// type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
/* but, to correctly use a utility type, we create an interface that extends from the omit: */
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

/* Here, we create a new DTO based from CreateProductDTO that will be used to update a product
but only receive the parameters in CreateProductDTO, instead of Product. By using a extension
of CreateProductDTO, UpdateProductDTO's properties are optional, so the product can be overwritten
with any of the allowed editable parameters */
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

/* Here, we need to create a DTO that is able to optionally use every Product's properties but
also isn't able to modify them, so we concatenate utility types like this: */
export interface FindProductDTO extends Readonly<Partial<Product>>{}
