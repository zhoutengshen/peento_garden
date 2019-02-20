'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let user = ctx.session.user;
    let result = {};
    if (!!user) {
      result.userName = user.username;
      result.hasLogin = true
    }
    await ctx.render('home.html', { user: result });
  }
}
module.exports = HomeController;
