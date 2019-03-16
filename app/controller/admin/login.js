'use strict';
const { Controller } = require('egg');

class Login extends Controller {
    async login() {
        const { ctx } = this;
        const { model } = ctx;
        const { username, password } = ctx.request.body;
        try {
            const admin = await model.Admin.findOne({
                where: {
                    username, password,
                },
            });
            if (admin) {
                ctx.body = {
                    success: true,
                    user: {
                        token: admin.id,
                        introduction: admin.introduction,
                        avatar: admin.avatar,
                    },
                    code: 20001,
                    msg: '登录成功',
                };
                ctx.session.admin = admin;
            } else {
                ctx.body = {
                    success: false,
                    msg: '登录失败',
                    code: 4003,
                };
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                success: false,
                msg: '异常',
                code: 5000,
            };
        }
    }
    async logout() {
        const { ctx } = this;
        const { session } = ctx;
        const admin = session.admin;
        if (admin) {
            session.admin = null;
            ctx.body = {
                success: true,
                msg: '没有登录',
            };
        } else {
            ctx.body = {
                success: true,
                msg: '没有登录',
            };
        }
    }

}
module.exports = Login;
