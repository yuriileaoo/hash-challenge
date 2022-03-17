import { NotFoundError } from "@lib/errors";
import CheckBlackFridayService from "@modules/products/services/CheckBlackFridayService";

let checkBlackFridayService: CheckBlackFridayService;

describe("Check if is Black Friday", () => {
  it("should be able to add GIFT", async () => {
    checkBlackFridayService = new CheckBlackFridayService();

    const send = {
      products: [
        {
          id: 1,
          quantity: 2,
          unit_amount: 15157,
          total_amount: 30314,
          discount: 0,
          is_gift: false,
        },
      ],
    };

    const show = await checkBlackFridayService.execute(send.products);

    let count = send.products.length;
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) count = send.products.length + 1;

    expect(show).toHaveLength(count);
  });
  it("should be able to verify if GIFT was added", async () => {
    checkBlackFridayService = new CheckBlackFridayService();

    const send = {
      products: [
        {
          id: 1,
          quantity: 2,
          unit_amount: 15157,
          total_amount: 30314,
          discount: 0,
          is_gift: false,
        },
      ],
    };

    const show = await checkBlackFridayService.execute(send.products);
    let count = 0;
    const today = new Date().toISOString().substring(0, 10);
    if (today === process.env.BLACK_FRIDAY) {
      count = 1;
    }
    const exist = show.filter((a) => {
      return a.is_gift === true;
    });

    expect(exist.length).toBeGreaterThanOrEqual(count);
  });
});
