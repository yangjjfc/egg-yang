'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const url = ctx.query.url;
    const content = await ctx.service.news.find(url);
    await ctx.render('news.html', {
      content,
    });
  }
}

module.exports = HomeController;
