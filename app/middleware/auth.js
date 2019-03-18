'use strict';
const loginAuthUrls = [// 需要登录权限的url
    '/api/user/info',
    '/api/logout',
    '/api/upload/img',
    '/api/user/update',
    '/api/cart/carts',
    '/api/address',
    '/api/city/province',
    '/api/city/city',
    '/api/city/area',
];

const adminAuthUrl = [
    {
        url: '/api-admin/logout',
        roles: [],
    },
    {
        url: '/api-admin/user',
        roles: [],
    },
];
module.exports = options => {//eslint-disable-line
    return async (ctx, next) => {
        const reqUrl = ctx.request.url;
        const apiReg = /^\/api\//;
        const publicReg = /^\/public\//;
        const apiAdminReg = /^\/api-admin\//;
        if (!publicReg.test(reqUrl) && !apiReg.test(reqUrl) && reqUrl !== '/' && !apiAdminReg.test(reqUrl)) {
            console.log('重定向到首页');
            ctx.redirect('/');
            return;
        }
        if (loginAuthUrls.some(url => url === reqUrl)) { // 访问需要权限的url
            console.log('访问需要登录权限的url：' + reqUrl);
            const user = ctx.session.user;
            const admin = ctx.session.admin;
            if (!user && !admin) {
                ctx.body = {
                    success: false,
                    msg: '访问的路径需要登录权限',
                    code: 4006,
                };
                return;
            }
        }
        if (adminAuthUrl.some(url => url === reqUrl)) {
            console.log('你访问需要管理员权限的路径');
            const user = ctx.session.user;
            if (user) { // 登录用户
                const roles = user.user.roles;
                if (roles) { // 当前用户拥有的权限
                    // /是否有这个权限
                    //
                } else {
                }
            }
        }
        await next();
    };
};
