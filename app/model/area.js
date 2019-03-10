/* jshint indent: 2 */
'use strict';
const getModel = function (sequelize, DataTypes) {
    return sequelize.define('dic_area', {
        areaID: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        area: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        father: {
            type: DataTypes.STRING(6),
            allowNull: true
        }
    }, {
        tableName: 'dic_area'
    });
};
module.exports = app => {
    const sequelize = app.model;
    const {INTEGER, DATE, STRING, DECIMAL} = app.Sequelize;
    return getModel(sequelize, {INTEGER, DATE, STRING, DECIMAL});
};
