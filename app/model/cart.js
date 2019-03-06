/* jshint indent: 2 */
'use strict';
const getModel = function (sequelize, DataTypes) {
    return sequelize.define('card', {
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        fruit_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        num: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '1',
        },
        fruit_img_url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        fruit_title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING(32),
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        unit: {
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        original_price: {
            type: DataTypes.DECIMAL,
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
        tag: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        del: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '0',
        },
    }, {
        tableName: 'card',
    });
};
module.exports = app => {
    const sequelize = app.model;
    const {INTEGER, DATE, STRING, DECIMAL} = app.Sequelize;
    return getModel(sequelize, {INTEGER, DATE, STRING, DECIMAL});
};
