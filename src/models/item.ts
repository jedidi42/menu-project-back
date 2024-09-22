// src/models/item.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import Menu from "./menu";
import MenuCategory from "./menuCategory";

class Item extends Model {
  public id!: number;
  public itemName!: string;
  public itemDescription!: string;
  public itemPrice!: number;
  public menuCategoryId!: number;
  public menuId!: number;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    menuCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MenuCategory,
        key: "id",
      },
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Menu,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Item",
    tableName: "items",
  }
);

export default Item;