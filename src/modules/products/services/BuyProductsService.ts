import { GetDiscountRequest } from "../../../../proto/discount_pb";
import client from "../../../infra/http/grpc/client";

class BuyProductsService {
  public async execute(products: any): Promise<void> {
    const request = new GetDiscountRequest();

    let discount: { percentage: number };
    client.getDiscount(request, (err, discounts) => {
      if (err) throw err;
      discount = discounts.toObject();
      console.log(discount);
    });
  }
}
export default BuyProductsService;
