// src/models/menu.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Menu extends Model {
  public id!: number;
  public businessId!: number;
}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "New Menu",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Menu",
    tableName: "menus",
  }
);

export default Menu;
