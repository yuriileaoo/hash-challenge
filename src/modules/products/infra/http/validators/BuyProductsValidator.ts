import { celebrate, Joi, Segments } from "celebrate";

const Products = Joi.object().keys({
  products: Joi.array().items({
    id: Joi.number(),
    quantity: Joi.number(),
  }),
});

export const BuyProductsValidator = celebrate({
  [Segments.BODY]: Products,
});
