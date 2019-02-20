/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('user_role', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    role_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'role',
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
    tableName: 'user_role',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, DATE } = app.Sequelize;
  return getModel(sequelize, { INTEGER, DATE });
};
