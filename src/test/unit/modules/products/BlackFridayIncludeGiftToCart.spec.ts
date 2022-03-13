import { NotFoundError } from "@lib/errors";
import BuyProductsService from "@modules/products/services/BuyProductsService";

let buyProductsService: BuyProductsService;

describe("Send products to cart", () => {
  it("should be able to add GIFT if it's Black Friday", async () => {
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

    expect(show.products).toHaveLength(3);
  });
});
