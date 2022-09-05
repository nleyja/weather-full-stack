import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const City = sequelize.define("city", {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },

  name: {
      type: Sequelize.STRING,
      allowNull: false,
  }
  


})