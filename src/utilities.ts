// type

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// type ProductSummery = {
//     id : number;
//     name : string;
//     price : string
// }

type ProductSummery = Pick<Product, "id" | "name" | "price">;

type ProdcutWithOutStock = Omit<Product, "stock" | "color">;

type ProductMustHaveColor = Required<Product>;

const product: ProductMustHaveColor = {
  id: 100,
  name: "watch",
  stock: 200,
  price: "4000",
  color: "red",
};

type OptionalProduct = Partial<Product>;

type ProductReadonly = Readonly<Product>;

const product1 = {
  id: 100,
  name: "watch",
  stock: 200,
  price: "4000",
  color: "red",
};

// const emptyObj : object = {}
const emptyObj: Record<string, unknown> = {};
