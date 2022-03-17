import productsJson from "../../../../infra/data/products.json";

describe("Validate products of JSON file", () => {
  const jsonProducts = productsJson;
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
