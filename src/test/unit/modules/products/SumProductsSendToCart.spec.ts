import { NotFoundError } from "@lib/errors";
import BuyProductsService from "@modules/products/services/BuyProductsService";

let buyProductsService: BuyProductsService;

describe("Send products to cart", () => {
  it("should be able to compare final values of TOTAL_AMOUNT", async () => {
    buyProductsService = new BuyProductsService();

    const send = {
      products: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    };

    const show = await buyProductsService.execute(send);

    const sumTotalAmount = show.products.reduce(
      (prev: any, curr: any) => prev + curr.total_amount,
      0
    );

    expect(show.total_amount).toBe(sumTotalAmount);
  });

  // it("should be able to compare final values of TOTAL_DISCOUNT", async () => {
  //   expect(show.total_discount).toBe(sumTotalDiscount);
  // });
  // it("should be able to compare final values of TOTAL_DISCOUNT", async () => {
  //   expect(show.total_amount_with_discount).toBe(sumTotalAmountWithDiscount);
  // });
});
