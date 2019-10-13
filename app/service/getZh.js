'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const result = await this.ctx.curl('https://news-at.zhihu.com/api/3/news/hot');
    const res = JSON.parse(result.data);
    return res.recent;
  }
}

module.exports = UserService;
