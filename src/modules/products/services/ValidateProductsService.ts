import productsJson from "../../../infra/data/products.json";
import IBuyProducts from "../dtos/IBuyProducts";
import IInsertProducts from "../dtos/IInsertProducts";
import IProducts from "../dtos/IProducts";
import IProductsRequest from "../dtos/IProductsRequest";

class BuyProductsService {
  public async execute(
    insertProducts: IInsertProducts
  ): Promise<IProductsRequest[]> {
    // CHECAGEM DE PRODUTOS REPETIDOS, INEXISTENTES E RETIRADA DE BRINDE DO CARRINHO - VaalidateProductsService
    const newArr: IProductsRequest[] = [];
    const duplicatedIds: number[] = [];
    insertProducts.products.forEach((current: IProductsRequest) => {
      const dupe = insertProducts.products.filter((a: { id: number }) => {
        return a.id === current.id;
      });

      if (current.id <= productsJson.length) {
        const selectedProduct = productsJson[current.id - 1];

        if (!selectedProduct.is_gift) {
          if (dupe.length > 1) {
            if (!duplicatedIds.includes(dupe[0].id)) {
              const sumQuantity = dupe
                .map((item: IProductsRequest) => item.quantity)
                .reduce((prev: number, curr: number) => prev + curr, 0);

              dupe[0].quantity = sumQuantity;
              newArr.push(dupe[0]);
              duplicatedIds.push(dupe[0].id);
            }
          } else {
            newArr.push(dupe[0]);
          }
        }
      }
    });
    return newArr;
  }
}
export default BuyProductsService;
