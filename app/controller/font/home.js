'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const user = ctx.session.user;
        const result = {};
        if (user) {
            result.userName = user.username;
            result.hasLogin = true;
        }
        await ctx.render('home.html', { user: result });
    }
}
module.exports = HomeController;
