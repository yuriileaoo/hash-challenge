import { GetDiscountRequest } from "../../../../proto/discount_pb";
import productsJson from "../../../infra/data/products.json";
import client from "../../../infra/http/grpc/client";
import IBuyProducts from "../dtos/IBuyProducts";
import IProducts from "../dtos/IProducts";

class BuyProductsService {
  public async execute(insertProducts: IBuyProducts): Promise<IBuyProducts> {
    const request = new GetDiscountRequest();

    // CHECAGEM DE PRODUTOS REPETIDOS
    const newArr: IProducts[] = [];
    const duplicatedIds: number[] = [];
    insertProducts.products.forEach((now: IProducts) => {
      const sum = insertProducts.products.filter((a) => {
        return a.id === now.id;
      });
      if (sum.length > 1) {
        if (!duplicatedIds.includes(sum[0].id)) {
          const sumQuantity = sum
            .map((item: IProducts) => item.quantity)
            .reduce((prev: number, curr: number) => prev + curr, 0);

          sum[0].quantity = sumQuantity;
          newArr.push(sum[0]);
          duplicatedIds.push(sum[0].id);
        }
      } else {
        newArr.push(sum[0]);
      }
    });

    // CALCULO DE VALORES E DESCONTO
    const buyProducts: IBuyProducts = {
      total_amount: 0,
      total_amount_with_discount: 0,
      total_discount: 0,
      products: [],
    };

    const finalProducts: IProducts[] = [];
    newArr.forEach((element: IProducts) => {
      let discount;

      const selectedProduct = productsJson[element.id - 1];

      if (!selectedProduct.is_gift) {
        client.getDiscount(request, (err, discounts) => {
          if (err) {
            discount = 0;
            // console.log(discount);
          } else {
            discount = discounts.toObject().percentage;
            console.log(discount);
          }
        });

        buyProducts.total_amount += selectedProduct.amount * element.quantity;
        buyProducts.total_amount_with_discount += Math.round(
          (selectedProduct.amount - discount) * element.quantity
        );
        buyProducts.total_discount += Math.round(
          discount * selectedProduct.amount * element.quantity
        );

        const prod = {
          id: selectedProduct.id,
          quantity: element.quantity,
          unit_amount: selectedProduct.amount, // Preço do produto em centavos
          total_amount: selectedProduct.amount * element.quantity, // Valor total na compra desse produto em centavos
          discount: Math.round(
            discount * selectedProduct.amount * element.quantity
          ), // Valor total de desconto em centavos
          is_gift: selectedProduct.is_gift, // É brinde?
        };
        finalProducts.push(prod);
      }
    });

    buyProducts.products = finalProducts;

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
    return buyProducts;
  }
}
export default BuyProductsService;
