'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 注册接口
  async signup() {
    const { ctx } = this;
    const rule = {
      userName: { type: 'string', required: true, message: '必填项' },
      userPass: { type: 'string', required: true, message: '必填项' },
      userEmail: { type: 'email', required: true, message: '必填项' },
    };
    const signupMsg = ctx.request.body;
    await ctx.validate(rule, signupMsg);
    signupMsg.userPass = ctx.helper.encrypt(signupMsg.userPass);// 解密
    const result = await ctx.service.user.signup(signupMsg);
    ctx.body = result;
  }
}

module.exports = UserController;
