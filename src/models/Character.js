const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      varchar:255
    },
    species:{
      type:DataTypes.STRING,
      allowNull: false,
      varchar:255
    },
    origin:{
      type:DataTypes.STRING,
      allowNull: false,
      varchar:255
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
      varchar:255
    },
    created:{
      type:DataTypes.DATE,
      allowNull: false,
    }
  });
};
