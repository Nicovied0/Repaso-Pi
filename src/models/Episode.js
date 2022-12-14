const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('episode', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      varchar:255
    },
  })
}
