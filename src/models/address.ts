// src/models/address.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Address extends Model {
  public id!: number;
  public street!: string;
  public city!: string;
  public state!: string;
  public postalCode!: number;
  public number!: number;
  public businessId!: number;
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Address",
  }
);

export default Address;
