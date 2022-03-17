import ValidateProductsService from "@modules/products/services/ValidateProductsService";

let validateProductsService: ValidateProductsService;

describe("Send products to cart", () => {
  it("should be able show final values of SIMPLE cart", async () => {
    validateProductsService = new ValidateProductsService();

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

    const show = await validateProductsService.execute(send);

    expect(show.length).toBe(send.products.length);
  });

  it("should be able show final values of REPETITIVE cart", async () => {
    validateProductsService = new ValidateProductsService();

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
    const dupe: number[] = [];
    send.products.forEach((e) => {
      if (!dupe.includes(e.id)) {
        dupe.push(e.id);
      }
    });
    const show = await validateProductsService.execute(send);

    expect(show.length).toBe(dupe.length);
  });
});
