'use strict';
const routerUrl = require('./const/router');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // home
    const { router, controller } = app;
    router.get(routerUrl.home, controller.font.home.index);
    // login
    router.post(routerUrl.apiLogin, controller.font.login.loginValidated);// /api/login
    router.get(routerUrl.loginPage, controller.font.login.index);//
    router.get(routerUrl.apiCheckAccount, controller.font.login.check);
    router.get(routerUrl.apiGetMobileCode, controller.font.login.getMobileCode);
    // logout
    router.get(routerUrl.logout, controller.font.logout.destroy);
    // reg
    router.get(routerUrl.reg, controller.font.register.index);
    // fruits
    router.get('/api/fruit/list', controller.font.fruits.list);
    // user
    router.get('/api/user', controller.font.user.info);
    router.put('/api/user', controller.font.user.update);
    router.post('/api/user', controller.font.user.create);
    // upload
    router.post('/api/upload/img', controller.font.upload.img);
    // cart
    router.get('/api/cart/carts', controller.font.cart.carts);
    router.post('/api/cart/carts', controller.font.cart.addCarts);
    router.put('/api/cart/carts', controller.font.cart.updateCarts);
    router.del('/api/cart/carts/:id', controller.font.cart.delCart);
    // cityAlliance
    router.get('/api/city/province', controller.font.cityAlliance.provinces);
    router.get('/api/city/city/:id', controller.font.cityAlliance.cities);
    router.get('/api/city/area/:id', controller.font.cityAlliance.areas);
    // address
    router.get('/api/address', controller.font.address.address);
    router.put('/api/address', controller.font.address.update);
    router.post('/api/address', controller.font.address.create);

    // 后台接口

    // 登录相关
    router.post('/api-admin/login', controller.admin.login.login);
    router.get('/api-admin/logout', controller.admin.login.logout);

    // 用户相关
    router.get('/api-admin/user', controller.admin.user.user);
    router.put('/api-admin/user', controller.admin.user.update);
    router.post('/api-admin/user', controller.admin.user.create);
    router.del('/api-admin/user/:id', controller.admin.user.remove);

};

