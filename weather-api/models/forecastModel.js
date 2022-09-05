import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const City = sequelize.define("cities", {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },

  name: {
      type: Sequelize.STRING,
      allowNull: false,
  },
 

  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  temp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
   
})