
'use strict';

module.exports = app => {
  app.BizErrorHandler = class extends app.BizErrorHandler {
    json(ctx, error) {
      ctx.status = 200;
      ctx.body = {
        api: ctx.request.url,
        code: error.code,
        message: error.bizParams.message,
        data: error.bizParams.data,
      };
    }
  };

  app.once('server', server => {
    // websocket
  });
  app.on('error', (err, ctx) => {
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};
