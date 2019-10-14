'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const result = await this.ctx.curl('https://news-at.zhihu.com/api/3/news/hot');
    const res = JSON.parse(result.data);
    const results = await this.ctx.model.User.insertMany(res.recent);
    return results;
  }
}

module.exports = UserService;
