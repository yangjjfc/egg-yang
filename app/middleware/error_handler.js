'use strict';

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.log('TCL: errorHandler -> err', err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.throwBizError({
        code: '4006',
        message: '检验错误',
        data: err.message,
      });
    }
  };
};

