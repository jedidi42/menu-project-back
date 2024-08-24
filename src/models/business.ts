// src/models/business.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import Address from "./address";

class Business extends Model {
  public id!: number;
  public businessName!: string;
  public addressId!: number;
}

Business.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Address,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Business",
  }
);

Business.belongsTo(Address, { foreignKey: "addressId" });

export default Business;
