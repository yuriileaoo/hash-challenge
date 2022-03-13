import { NotFoundError } from "@lib/errors";
import BuyProductsService from "@modules/products/services/BuyProductsService";

let buyProductsService: BuyProductsService;

describe("Send products to cart", () => {
  it("should be able show final values of SIMPLE cart", async () => {
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
    let count = 2;
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) count += 1;

    const show = await buyProductsService.execute(send);

    expect(show.products).toHaveLength(count);
  });

  it("should be able show final values of REPETITIVE cart", async () => {
    buyProductsService = new BuyProductsService();

    const send = {
      products: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 1,
          quantity: 2,
        },
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

    let count = 2;
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) count += 1;

    const show = await buyProductsService.execute(send);

    expect(show.products).toHaveLength(count);
  });

  it("should be able show final values of cart with GIFT", async () => {
    buyProductsService = new BuyProductsService();

    const send = {
      products: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 2,
          quantity: 2,
        },
        {
          id: 6, // GIFT PRODUCT
          quantity: 1,
        },
      ],
    };

    let count = 2;
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) count += 1;

    const show = await buyProductsService.execute(send);

    expect(show.products).toHaveLength(count);
  });
});
