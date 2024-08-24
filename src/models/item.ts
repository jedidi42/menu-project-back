// src/models/item.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Item extends Model {
  public id!: number;
  public itemName!: string;
  public itemDescription!: string;
  public itemPrice!: number;
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
  },
  {
    sequelize,
    modelName: "Item",
  }
);

export default Item;
