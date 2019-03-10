/* jshint indent: 2 */

const getModel = function (sequelize, DataTypes) {
    return sequelize.define('dic_city', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        cityID: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(50),
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
        tableName: 'dic_city'
    });
};

module.exports = app => {
    const sequelize = app.model;
    const {INTEGER, DATE, STRING, DECIMAL} = app.Sequelize;
    return getModel(sequelize, {INTEGER, DATE, STRING, DECIMAL});
};
