/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
    },
    role_decs: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    role_name: {
      type: DataTypes.STRING(32),
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
    tableName: 'role',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, STRING,DATE } = app.Sequelize;
  return getModel(sequelize, { INTEGER, STRING,DATE });
};
