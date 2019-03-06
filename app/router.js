'use strict';
const routerUrl = require("./const/router");
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // home
    const {router, controller} = app;
    router.get(routerUrl.home, controller.home.index);
    // login
    router.post(routerUrl.apiLogin, controller.login.loginValidated);///api/login
    router.get(routerUrl.loginPage, controller.login.index);//
    router.get(routerUrl.apiCheckAccount, controller.login.check);
    router.get(routerUrl.apiGetMobileCode, controller.login.getMobileCode);
    //logout
    router.get(routerUrl.logout, controller.logout.destroy);

    //reg
    router.get(routerUrl.reg, controller.register.index);

    //fruits
    router.get("/api/fruit/list", controller.fruits.list);

    //user
    router.get("/api/user", controller.user.info);
    router.put("/api/user", controller.user.update);
    router.post("/api/user",controller.user.create);
    //upload
    router.post("/api/upload/img", controller.upload.img);

    //cart
    router.get("/api/cart/carts",controller.cart.carts);
    router.post("/api/cart/carts",controller.cart.addCarts);
    router.put("/api/cart/carts",controller.cart.updateCarts);
    router.del("/api/cart/carts",controller.cart.delCart);
};

