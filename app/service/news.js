'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find(url) {
    const result = await this.ctx.curl(url);
    const res = JSON.parse(result.data);
    console.log(res);
    return res.body;
  }
}

module.exports = UserService;
