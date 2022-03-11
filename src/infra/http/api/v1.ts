import { Router } from "express";

import productsRoutes from "../../../modules/products/infra/http/routes/products.routes";

const v1Routes = Router();

v1Routes.use("/products", productsRoutes);

export default v1Routes;
