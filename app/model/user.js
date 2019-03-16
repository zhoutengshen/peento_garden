/* jshint indent: 2 */
'use strict';
const getModel = function(sequelize, DataTypes) {
    return sequelize.define('user',
        {
            age: {
                type: DataTypes.INTEGER(3),
                allowNull: true,
                defaultValue: '0',
            },
            gender: {
                type: DataTypes.INTEGER(1),
                allowNull: true,
            },
            mobile: {
                type: DataTypes.STRING(13),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            avatar_url: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(32),
                allowNull: true,
                unique: true,
            },
            bg_img_url: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            realname: {
                type: DataTypes.STRING(32),
                allowNull: true,
            },
            account: {
                type: DataTypes.STRING(10),
                allowNull: false,
                unique: true,
            },
            username: {
                type: DataTypes.STRING(16),
                allowNull: true,
                unique: true,
            },
            status: {
                type: DataTypes.INTEGER(2),
                allowNull: false,
                defaultValue: '0',
            },
            last_sign_time: {
                type: DataTypes.DATE,
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
            ip: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            tableName: 'user',
        });
};
module.exports = app => {
    const sequelize = app.model;
    const { INTEGER, DATE, STRING } = app.Sequelize;
    return getModel(sequelize, { INTEGER, DATE, STRING });
};
