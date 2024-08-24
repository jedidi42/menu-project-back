// src/models/itemList.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class ItemList extends Model {
  public id!: number;
  public categoryId!: number;
}

ItemList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ItemList",
  }
);

export default ItemList;
