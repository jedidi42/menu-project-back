// src/models/menuCategory.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import Menu from "./menu"; // Assuming you have a Menu model

class MenuCategory extends Model {
  public id!: number;
  public menuId!: number;
  public categoryName!: string;
}

MenuCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Menu,
        key: "id",
      },
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "MenuCategory",
    tableName: "menuCategories",
  }
);

export default MenuCategory;