import { Response, Request } from "express";
import { container } from "tsyringe";

import BuyProductsService from "../../../services/BuyProductsService";

class ProductsController {
  public async buyProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const buyProductsService = container.resolve(BuyProductsService);

    const data = request.body;

    const products = await buyProductsService.execute(data);

    return response.status(200).json(products);
  }
}

export default ProductsController;
