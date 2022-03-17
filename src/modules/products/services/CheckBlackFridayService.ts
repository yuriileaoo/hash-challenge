import productsJson from "../../../infra/data/products.json";
import IProducts from "../dtos/IProducts";

class BuyProductsService {
  public async execute(finalProducts: IProducts[]): Promise<IProducts[]> {
    // BLACK FRIDAY
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) {
      const gift = productsJson.filter((a) => {
        return a.is_gift === true;
      });

      finalProducts.push({
        id: gift[0].id,
        quantity: 1,
        unit_amount: 0,
        total_amount: 0,
        discount: 0,
        is_gift: true,
      });
    }
    return finalProducts;
  }
}
export default BuyProductsService;
