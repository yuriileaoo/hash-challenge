import IProducts from "./IProducts";

export default interface IFinalCart {
  total_amount: number; // Valor total da compra sem desconto
  total_amount_with_discount: number; // Valor total da compra com desconto
  total_discount: number; // Valor total de descontos
  products: IProducts[];
}
