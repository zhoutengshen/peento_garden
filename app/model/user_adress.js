/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('user_adress', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    receive_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    receive_phone: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    receive_mobile: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    receive_state: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    receive_city: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    receive_district: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    receive_adress: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    receive_zip: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'user_adress',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, DATE, STRING } = app.Sequelize;
  return getModel(sequelize, { INTEGER, DATE, STRING });
};
