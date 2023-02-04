/* this is the base model that all of our other models are going to inherit*/
export interface BaseModel {
  id: string | number;
  createdAt: Date;
  updatedAt?: Date;
}
