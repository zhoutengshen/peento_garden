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
    router.post(routerUrl.apiRegister, controller.register.register);

    //fruits

    router.get("/api/fruit/list", controller.fruits.list);

    //user
    router.get("/api/user/info", controller.user.info);

    //upload
    router.post("/api/upload/img", controller.upload.img);
};

