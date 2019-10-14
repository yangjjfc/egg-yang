/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570882724186_6391';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/test',
    options: {
      // user: 'test', // 数据库账号
      // pass: 'test'  // 数据库密码
    },
  };

  return {
    ...config,
    ...userConfig,
  };

};
