'use strict';

// 渲染引擎ejs
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// 解决跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 连接mongodb
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 业务错误处理封装成插件
exports.bizerror = {
  enable: true,
  package: 'egg-bizerror',
};
