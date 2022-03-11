interface IProducts {
  id: string;
  quantity: number;
  unit_amount: number; // Preço do produto em centavos
  total_amount: number; // Valor total na compra desse produto em centavos
  discount: number; // Valor total de desconto em centavos
  is_gift: boolean; // É brinde?
}

export default interface IBuyProducts {
  total_amount: number; // Valor total da compra sem desconto
  total_amount_with_discount: number; // Valor total da compra com desconto
  total_discount: number; // Valor total de descontos
  products: IProducts[];
}
