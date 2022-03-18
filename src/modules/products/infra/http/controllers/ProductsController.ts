import CalculateDiscountsService from "@modules/products/services/CalculateDiscountsService";
import CalculateTotalService from "@modules/products/services/CalculateTotalService";
import CheckBlackFridayService from "@modules/products/services/CheckBlackFridayService";
import ValidateProductsService from "@modules/products/services/ValidateProductsService";
import { Response, Request } from "express";
import { container } from "tsyringe";

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
