'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const list = await ctx.service.getZh.find();
    console.log(list);

    await ctx.render('zh.html', {
      list,
    });
    // ctx.body = 'a';
  }
}

module.exports = HomeController;
