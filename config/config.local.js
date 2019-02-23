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
exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true
    },
    domainWhiteList: [ 'http://http://localhost:8080' ],
};
exports.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};