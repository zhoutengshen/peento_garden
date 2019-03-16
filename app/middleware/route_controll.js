'use strict';
// 登录判断
//eslint-disable-line
module.exports = option => {//eslint-disable-line
    return async function routeControll(ctx, next) {
        // const routerUrl = ctx.helper.routerUrl;
        // if (!!ctx.session.user) {//登录用户，非法操作
        //     if (ctx.request.url == routerUrl.login) {//访问登录相关资源
        //         if (!ctx.helper.isAjax()) {//非Ajax 请求
        //             ctx.status = 302;//重定向
        //             ctx.set("location", "/");//重定向到首页
        //         } else {//ajax请求
        //             ctx.body = {
        //                 success: false,
        //                 code: 3002,
        //                 message: "你已经登录",
        //                 location: "/"
        //             }
        //         }
        //         return;
        //     }
        // }
        await next();
    };
};
