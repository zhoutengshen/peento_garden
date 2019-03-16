'use strict';
module.exports = options => {//eslint-disable-line
    return async function logedReqUrl(ctx, next) { // logedReqUrl为中间件名称
        ctx.logger.debug(`\r\n输出位置${__filename}\r\n请求路径：${ctx.request.url}`);
        await next();
    };
};
