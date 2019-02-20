/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('func', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
    },
    func_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    resource_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: 'func',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, DATE, STRING} = app.Sequelize;
  return getModel(sequelize, { INTEGER, DATE, STRING});
};

