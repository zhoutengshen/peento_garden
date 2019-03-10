const loginAuthUrls = [//需要登录权限的url
    "/api/user/info",
    "/api/logout",
    "/api/upload/img",
    "/api/user/update",
    "/api/cart/carts",
    "/api/address",
    "api/city/province",
    "/api/city/city",
    "/api/city/area"

]
module.exports = options => {
    return async (ctx, next) => {
        const reqUrl = ctx.request.url;
        const reg = /^\/api\//;
        if (!reg.test(reqUrl) && reqUrl !== "/") {
            ctx.redirect("/");
            return;
        }
        if (loginAuthUrls.some(url => url === reqUrl)) {//访问需要权限的url
            console.log("访问需要登录权限的url：" + reqUrl);
            const user = ctx.session.user;
            if (!user) {
                ctx.body = {
                    success: false,
                    msg: "访问的路径需要登录权限",
                    code: 4006,
                }
                return;
            }
        }
        await next();
    }
}