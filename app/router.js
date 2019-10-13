'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.news.index);
  router.get('/', controller.home.index);
};
