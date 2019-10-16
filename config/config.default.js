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
  // 业务错误处理封装成插件
  exports.bizerror = {
    breakDefault: false, // disable default error handler禁用默认错误处理
    sendClientAllParams: false, // return error bizParams to user，返回错误参数给用户
    interceptAllError: false, // handle all exception, not only bizError exception处理所有的异常，不仅是业务异常。
  };
  exports.validate = {
    // convert: false,
    // validateRoot: false,
  };
  //   exports.onerror = {
  //     errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500',
  //   };
  return {
    ...config,
    ...userConfig,
  };

};
