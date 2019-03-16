/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('admin_role', {
        id: {
            type: DataTypes.STRING(32),
            allowNull: false,
            primaryKey: true,
        },
        admin_id: {
            type: DataTypes.STRING(32),
            allowNull: false,
            references: {
                model: 'admin',
                key: 'id',
            },
        },
        role_id: {
            type: DataTypes.STRING(32),
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
        tableName: 'admin_role',
    });
};

module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING });
};
