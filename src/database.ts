// src/database.ts
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("menu_project_db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

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
