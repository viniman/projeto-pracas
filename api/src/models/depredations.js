'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class depredations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  depredations.init({
    graffiti: DataTypes.INTEGER,
    abandonment: DataTypes.INTEGER,
    evaluation_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'depredations',
  });
  return depredations;
};