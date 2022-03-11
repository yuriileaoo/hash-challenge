import { Router } from "express";
import { container } from "tsyringe";

import ProductsController from "../controllers/ProductsController";
import { BuyProductsValidator } from "../validators/BuyProductsValidator";

// import ensureAuthenticated from "../../../../../employees/infra/http/middlewares/ensureAuthenticated";

const productsRoutes = Router();

const productsController = container.resolve(ProductsController);

productsRoutes.post("/", BuyProductsValidator, productsController.buyProducts);

export default productsRoutes;
