import { Response, Request } from "express";
import { container } from "tsyringe";
import { promisify } from "util";

import productsJson from "../../../../../infra/data/products.json";
import BuyProductsService from "../../../services/BuyProductsService";
import CalculateDiscountsService from "../../../services/CalculateDiscountsService";
import CalculateTotalService from "../../../services/CalculateTotalService";
import CheckBlackFridayService from "../../../services/CheckBlackFridayService";
import ValidateProductsService from "../../../services/ValidateProductsService";

class ProductsController {
  public async buyProducts(
    request: Request,
    response: Response
  ): Promise<Response | void> {
    const validateProductsService = container.resolve(ValidateProductsService);
    const calculateDiscountsService = container.resolve(
      CalculateDiscountsService
    );
    const calculateTotalService = container.resolve(CalculateTotalService);
    const checkBlackFridayService = container.resolve(CheckBlackFridayService);

    const data = request.body;

    const validProducts = await validateProductsService.execute(data);

    const calculateDiscounts = await Promise.all(
      validProducts.map(async (e) => {
        const product = await calculateDiscountsService.execute(e);
        return product;
      })
    );

    const totalWithoutProducts = await calculateTotalService.execute(
      calculateDiscounts
    );

    const finalProducts = await checkBlackFridayService.execute(
      calculateDiscounts
    );

    const finalCart = Object.assign(totalWithoutProducts, {
      products: finalProducts,
    });

    return response.status(200).json(finalCart);
  }
}

export default ProductsController;
