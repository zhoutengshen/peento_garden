'use strict';
// 开启sequelize （一个orm框架）
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
// 开启视图渲染
exports.view = {
    enable: true,
    package: 'egg-view',
};
// 使用ejs视图引擎
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};
exports.cors = {
    enable: false,
    package: 'egg-cors',
};
