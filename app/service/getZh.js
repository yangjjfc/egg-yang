'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const { ctx } = this;
    const result = await ctx.curl('https://news-at.zhihu.com/api/3/news/hot');
    const res = JSON.parse(result.data);
    let news_id = [],
      format_res = res.recent;
    if (format_res && format_res.length) {
      news_id = format_res.map(item => item.news_id); // 取出id
      const find_res = await ctx.model.User.find({ news_id: { $in: news_id } }); // 匹配数据库
      const list_res = find_res.map(item => item.news_id);
      format_res = format_res.filter(item => { // 过滤
        return !list_res.includes(item.news_id);
      });
    }
    await ctx.model.User.insertMany(format_res);
    return res.recent;
  }
}

module.exports = UserService;
