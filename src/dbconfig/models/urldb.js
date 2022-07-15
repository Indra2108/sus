'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlDB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlDB.init({
    originalURL: DataTypes.STRING,
    customURL: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UrlDB',
  });
  return UrlDB;
};