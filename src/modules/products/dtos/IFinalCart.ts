import IProducts from "@modules/products/dtos/IProducts";

export default interface IFinalCart {
  total_amount: number;
  total_amount_with_discount: number;
  total_discount: number;
  products: IProducts[];
}
