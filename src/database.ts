import { Sequelize } from "sequelize";
require("dotenv").config(); // Load environment variables from .env file

const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as any, // Type assertion to any to avoid type errors
    port: process.env.DB_PORT as any, // Ensure the port is set correctly
    dialectOptions: {
      ssl: {
        require: true, // Ensure SSL is required if your database requires it
        rejectUnauthorized: false, // This may be necessary for some cloud providers
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err: Error) => {
    console.error("Unable to connect to the database:", err);
  });

export { sequelize };
