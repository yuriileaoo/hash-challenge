import ProductsController from "@modules/products/infra/http/controllers/ProductsController";
import { BuyProductsValidator } from "@modules/products/infra/http/validators/BuyProductsValidator";
import { Router } from "express";
import { container } from "tsyringe";

const productsRoutes = Router();

const productsController = container.resolve(ProductsController);

productsRoutes.post("/", BuyProductsValidator, productsController.buyProducts);

export default productsRoutes;
