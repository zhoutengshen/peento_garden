/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('fruit_order', {
        order_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        fruit_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        fruit_img_url: {
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
        del: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
        },
    }, {
        tableName: 'fruit_order',
    });
};
module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING, DECIMAL } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING, DECIMAL });
};
