import { schema } from "normalizr";

export const pizzaSchema = new schema.Entity(
  "pizza",
  {},
  { idAttribute: "id" }
);

export const arrayOfPizzaSchema = new schema.Array(pizzaSchema);
