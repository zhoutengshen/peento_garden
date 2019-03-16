/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('user_address', {
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        receive_name: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        receive_mobile: {
            type: DataTypes.STRING(13),
            allowNull: false,
        },
        receive_province: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        receive_city: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        receive_area: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        receive_detailed_address: {
            type: DataTypes.STRING(128),
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
        tableName: 'user_address',
    });
};
module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING });
};
