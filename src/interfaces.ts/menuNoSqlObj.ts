export default interface MenuNoSqlObj {
  menuId: number;
  categories: CategoryNoSqlObj[];
}

interface CategoryNoSqlObj {
  categoryId: number;
  name: string;
  description: string;
  items: ItemNoSqlObj[];
}

interface ItemNoSqlObj {
  itemId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
