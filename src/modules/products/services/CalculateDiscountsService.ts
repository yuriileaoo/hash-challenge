import productsJson from "@infra/data/products.json";
import client from "@infra/http/grpc/client";
import IProducts from "@modules/products/dtos/IProducts";
import IProductsRequest from "@modules/products/dtos/IProductsRequest";
import { promisify } from "util";

import { GetDiscountRequest } from "../../../../proto/discount_pb";

class BuyProductsService {
  public async execute(product: IProductsRequest): Promise<IProducts> {
    let percentage;
    try {
      const request = new GetDiscountRequest();
      request.setProductid(product.id);
      const getDiscount = promisify(client.getDiscount).bind(client);

      const response: any = await getDiscount(request);
      percentage = response.getPercentage();
    } catch {
      percentage = 0;
    }
    const selectedProduct = productsJson[product.id - 1];

    return {
      id: product.id,
      quantity: product.quantity,
      unit_amount: selectedProduct.amount,
      total_amount: selectedProduct.amount * product.quantity,
      discount: Math.round(
        percentage * selectedProduct.amount * product.quantity
      ),
      is_gift: selectedProduct.is_gift,
    };
  }
}
export default BuyProductsService;
