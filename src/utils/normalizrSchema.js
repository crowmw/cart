import { schema } from "normalizr";

export const pizzaSchema = new schema.Entity(
  "pizza",
  {},
  { idAttribute: "id" }
);

export const arrayOfPizzaSchema = new schema.Array(pizzaSchema);

export const toppingSchema = new schema.Entity(
  "topping",
  {},
  { idAttribute: "id" }
);

export const arrayOfToppingSchema = new schema.Array(toppingSchema);
