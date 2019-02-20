'use strict';
const routerUrl = require("./const/router");
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // home
  const { router, controller } = app;
  router.get(routerUrl.home, controller.home.index);
  // login
  router.post(routerUrl.login, controller.login.loginValidated);
  router.get(routerUrl.login, controller.login.index);

  //logout
  router.post(routerUrl.logout, controller.logout.destroy);

  //reg
  router.get(routerUrl.reg, controller.register.index);
};

