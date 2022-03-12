export default interface IProducts {
  id: number;
  quantity: number;
  unit_amount: number; // Preço do produto em centavos
  total_amount: number; // Valor total na compra desse produto em centavos
  discount: number; // Valor total de desconto em centavos
  is_gift: boolean; // É brinde?
}
