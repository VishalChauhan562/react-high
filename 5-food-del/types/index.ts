export type Restaurant = {
  id: number;
  name: string;
  image: string;
  rating: number | string;
  category: string;
  price: string;
  deliveryTime: string;
  promoted?: boolean;
  offer?: string;
};

export type BodyProps = {
  restaurants: Restaurant[];
};
