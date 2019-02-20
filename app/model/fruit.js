/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
  return sequelize.define('fruit', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
    },
    fruit_img_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fruit_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '10',
    },
    discrib: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sell_point: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    start_all: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    num: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1',
    },
    buyer_count: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING(255),
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
    del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
    },
  }, {
    tableName: 'fruit',
  });
};
module.exports = app => {
  const sequelize = app.model;
  const { INTEGER, DATE, STRING, DECIMAL, TEXT } = app.Sequelize;
  return getModel(sequelize, { INTEGER, DATE, STRING, DECIMAL, TEXT });
};
