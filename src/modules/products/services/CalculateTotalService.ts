import IBuyProducts from "@modules/products/dtos/IBuyProducts";
import IProducts from "@modules/products/dtos/IProducts";

class BuyProductsService {
  public async execute(finalProducts: IProducts[]): Promise<IBuyProducts> {
    if (!finalProducts) {
      return {
        total_amount: 0,
        total_amount_with_discount: 0,
        total_discount: 0,
      };
    }

    const buyProducts = {
      total_amount: 0,
      total_amount_with_discount: 0,
      total_discount: 0,
    };

    finalProducts.forEach((e) => {
      buyProducts.total_amount += e.unit_amount * e.quantity;
      buyProducts.total_amount_with_discount += Math.round(
        (e.unit_amount - e.discount) * e.quantity
      );
      buyProducts.total_discount += Math.round(e.discount);
    });

    return buyProducts;
  }
}
export default BuyProductsService;
