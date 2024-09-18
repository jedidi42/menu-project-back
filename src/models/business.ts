// src/models/business.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import Address from "./address";

class Business extends Model {
  public id!: number;
  public businessName!: string;
  public address!: string;
  public addressId!: number;
}

Business.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Business",
    tableName: "businesses",
  }
);

export default Business;
