'use strict';
exports.logger = {
    consoleLevel: 'DEBUG',
};
//数据库配置
exports.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '123456',
    database: 'peento_garden',
};
exports.session = {
    key: "EGG_SESSION",
    maxAge: 0, // 浏览器会话
    httpOnly: true,
    encrypt: false
};