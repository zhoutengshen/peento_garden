
/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('admin', {
        id: {
            type: DataTypes.STRING(32),
            allowNull: false,
            primaryKey: true,
        },
        introduction: {
            type: DataTypes.STRING(64),
            allowNull: true,
        },
        avatar: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(32),
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
    }, {
        tableName: 'admin',
    }); 1;
};
module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING, DECIMAL } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING, DECIMAL });
};

