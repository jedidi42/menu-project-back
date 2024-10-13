// src/models/brand.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import Menu from "./menu";

class Brand extends Model {
  public id!: number;
  public primaryColor!: string;
  public secondaryColor!: string;
  public textFont!: string;
  public templateId!: number;
}

Brand.init(
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

    primaryColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondaryColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    templateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Set default value to 1
    },
  },
  {
    sequelize,
    modelName: "Brand",
    tableName: "brands",
  }
);

export default Brand;
