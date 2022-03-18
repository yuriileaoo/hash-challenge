import CalculateTotalService from "@modules/products/services/CalculateTotalService";

let calculateTotalService: CalculateTotalService;

describe("Send products to cart", () => {
  it("should be able to compare final values of TOTAL_AMOUNT", async () => {
    calculateTotalService = new CalculateTotalService();

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
        {
          id: 2,
          quantity: 3,
          unit_amount: 93811,
          total_amount: 281433,
          discount: 0,
          is_gift: false,
        },
      ],
    };

    const show = await calculateTotalService.execute(send.products);

    const sumTotalAmount = send.products.reduce(
      (prev: any, curr: any) => prev + curr.total_amount,
      0
    );

    expect(show.total_amount).toBe(sumTotalAmount);
  });

  it("should be able to compare final values of TOTAL_DISCOUNT", async () => {
    calculateTotalService = new CalculateTotalService();

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
        {
          id: 2,
          quantity: 3,
          unit_amount: 93811,
          total_amount: 281433,
          discount: 0,
          is_gift: false,
        },
      ],
    };

    const show = await calculateTotalService.execute(send.products);

    const sumTotalDiscount = send.products.reduce(
      (prev: any, curr: any) => prev + curr.discount,
      0
    );

    expect(show.total_discount).toBe(sumTotalDiscount);
  });

  it("should be able to compare final values of TOTAL_AMOUNT_WITH_DISCOUNT", async () => {
    calculateTotalService = new CalculateTotalService();

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
        {
          id: 2,
          quantity: 3,
          unit_amount: 93811,
          total_amount: 281433,
          discount: 0,
          is_gift: false,
        },
      ],
    };

    const show = await calculateTotalService.execute(send.products);

    const sumTotalAmount = send.products.reduce(
      (prev: any, curr: any) => prev + curr.total_amount,
      0
    );

    const sumTotalDiscount = send.products.reduce(
      (prev: any, curr: any) => prev + curr.discount,
      0
    );

    expect(show.total_amount_with_discount).toBe(
      sumTotalAmount - sumTotalDiscount
    );
  });
});
