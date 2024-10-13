// src/models/menuNoSql.ts
import mongoose, { Schema, Document } from "mongoose";

interface ItemNoSqlObj extends Document {
  itemId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CategoryNoSqlObj extends Document {
  categoryId: number;
  name: string;
  items: ItemNoSqlObj[];
  imageUrl: string;
}

interface MenuNoSqlObj extends Document {
  menuId: number;
  categories: CategoryNoSqlObj[];
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  image: { type: String, required: false },
});

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  items: { type: [ItemSchema], required: true },
  imageUrl: { type: String, required: false },
});

const MenuSchema: Schema = new Schema({
  menuId: { type: Number, required: true },
  categories: { type: [CategorySchema], required: true },
});

const Menu = mongoose.model<MenuNoSqlObj>("Menu", MenuSchema);
export default Menu;
