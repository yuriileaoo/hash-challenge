import BuyProductsService from "@modules/products/services/BuyProductsService";

import productsJson from "../../../../infra/data/products.json";

let buyProductsService: BuyProductsService;

describe("Validate products of JSON file", () => {
  const jsonProducts = productsJson;
  buyProductsService = new BuyProductsService();
  it("should be able to count products of JSON file", async () => {
    expect(jsonProducts.length).toBe(6);
  });

  it("should be able to search if exist GIFT in JSON file", async () => {
    const gift = jsonProducts.filter((a) => {
      return a.is_gift === true;
    });
    expect(gift.length).toBeGreaterThanOrEqual(1);
  });
});
