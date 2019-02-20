/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_peentoGardenSecurityKey';

  // add your middleware config here
  config.middleware = ["logedReqUrl","routeControll"];//文件名称为中间件名（下划线会转换为驼峰）
  //中间件配置
  config.logedReqUrl = {

  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //视图引擎配置
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    root: [
      path.join(appInfo.baseDir, 'app/view')
    ].join(',')
  };
  config.ejs = {
  }

  //session 配置（egg内置，这是默认配置）
  config.session = {
    key: 'EGG_SESS',
    maxAge: 0, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  //这里是线上数据库配置
  config.sequelize ={

  }

  return {
    ...config,
    ...userConfig,
  };
};
