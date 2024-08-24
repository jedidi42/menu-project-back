// src/models/brand.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Brand extends Model {
  public id!: number;
  public primaryColor!: string;
  public secondaryColor!: string;
  public textFont!: string;
}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    primaryColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondaryColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textFont: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Brand",
  }
);

export default Brand;
