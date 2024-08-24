// src/models/category.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Category extends Model {
  public id!: number;
  public itemListId!: number;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    itemListId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);

export default Category;
