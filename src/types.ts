export type SetCartType = {
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
};
export type List = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  qtd: number;
};
export type CardProps = {
  item: List;
  children?: React.ReactNode;
  variant?: 'default' | 'modal' | 'card' | 'resumo';
};
