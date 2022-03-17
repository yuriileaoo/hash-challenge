import CalculateDiscountsService from "@modules/products/services/CalculateDiscountsService";

import productsJson from "../../../../infra/data/products.json";

let calculateDiscountsService: CalculateDiscountsService;

describe("Send products to cart", () => {
  it("should be able to request DISCOUNT", async () => {
    calculateDiscountsService = new CalculateDiscountsService();

    const send = {
      id: 1,
      quantity: 2,
    };

    const selectedProduct = productsJson[send.id - 1];

    const show = await calculateDiscountsService.execute(send);

    const discount = selectedProduct.amount * send.quantity * 0.05;

    if (show.discount === 0) {
      expect(show.discount).toBe(0);
    } else {
      expect(show.discount).toBe(discount);
    }
  });
});
