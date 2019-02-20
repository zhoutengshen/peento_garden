/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('role_func', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
    },
    role_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    func_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'func',
        key: 'id',
      },
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
    tableName: 'role_func',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER,DATE } = app.Sequelize;
  return getModel(sequelize, { INTEGER,DATE });
};
