'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.news.index);
  router.get('/', controller.home.index);


  //   // 注册登录
  router.post('/gateway/v1/signup', controller.user.signup);
  //   router.post('/gateway/v1/signin', controller.user.signin);
  //   router.get('/gateway/v1/signoff', controller.user.signout);

};
