/* this is the base model that all of our other models are going to inherit*/
export interface BaseModel {
  /* in order to protect variables that we know their values will never change, we use the
  reserved work 'readonly' before their declaration, like this: */
  readonly id: string | number;
  readonly createdAt: Date;
  updatedAt: Date;
}
/* readonly can only be used with properties inside classes, interfaces and objects */
