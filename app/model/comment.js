/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        fruit_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        start: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
        },
        discrib: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: '',
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
        tableName: 'comment',
    });
};
module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING, DECIMAL } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING, DECIMAL });
};
