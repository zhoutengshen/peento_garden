/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    payment: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    payment_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
    },
    post_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    consign_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    close_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    shipping_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    shipping_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    buyer_massege: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    byer_nickname: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    byer_rate: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
    },
  }, {
    tableName: 'order',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, DATE, STRING, DECIMAL } = app.Sequelize;
  return getModel(sequelize, { INTEGER, DATE, STRING, DECIMAL });
};
