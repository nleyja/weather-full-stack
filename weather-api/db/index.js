import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("forecast_db", "root", "CL0udB0!", {
  dialect: "mysql",
  host: "localhost"
});