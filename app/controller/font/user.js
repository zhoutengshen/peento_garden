'use strict';
const { Controller } = require('egg');

class User extends Controller {
    async info() {
        const { ctx } = this;
        if (ctx.session.user) {
            const user = ctx.session.user;
            const userId = user.id;
            const newUser = await ctx.model.User.findOne({
                where: {
                    id: userId,
                },
            });
            ctx.session.user = newUser;
            ctx.body = {
                success: true,
                user: {
                    id: userId,
                    age: newUser.age,
                    gender: newUser.gender,
                    mobile: newUser.mobile,
                    email: newUser.email,
                    realname: newUser.realname,
                    bgImgUrl: newUser.bg_img_url,
                    avatarUrl: newUser.avatar_url,
                    username: newUser.username,
                },
                code: 20001,
                msg: '获取用户数据成功',
            };
        } else {
            ctx.body = {
                success: false,
                code: 40006,
                msg: '获取用户数据失败',
            };
        }

    }

    async updateMobile() {
        const { ctx } = this;
        const { mobileCode } = ctx.request.body;
        const user = ctx.session.user;
        if (!user) {
            ctx.body = {
                success: false,
                msg: '请登录',
                code: 4006,
            };
            return;
        }
        const mobileNum = user.mobile;
        if (ctx.session.lastMobileCode[mobileNum]) {
            ctx.body = {
                success: false,
                msg: '先获取验证码',
                code: 4006,
            };
            return;
        }
        const code = ctx.session.lastMobileCode[mobileNum].mobileCode;
        if (mobileCode == code) {

        }


    }

    async update() {
        const { ctx } = this;
        const user = ctx.session.user;
        const id = user.id;
        console.log(id);
        const { values } = ctx.request.body;
        const { model } = ctx;
        await model.User.update({
            ...values,
        }, {
            where: {
                id,
            },
        }).then(result => { // array
            if (result.length > 0) {
                ctx.body = {
                    success: true,
                    code: 20001,
                    msg: '修改用户数据成功',
                };
            } else {
                ctx.body = {
                    success: false,
                    msg: '保存用户数据失败',
                    code: 4006,
                };
            }
        }).catch(() => {
            ctx.body = {
                success: false,
                msg: '保存用户数据出错',
                code: 5006,
            };
        });

    }

    async create() {
        const { ctx } = this;
        const { mobileNum, password, mobileCode } = ctx.request.body;
        ctx.logger.debug(`\r\n注册表单数据：${ctx.request.body}`);
        try {
            this.dataValidate({ mobileCode, password, mobileNum });
        } catch (e) {
            ctx.body = {
                success: false,
                code: 40006,
                msg: '提交数据有误',
            };
            return;
        }

        // 在session中取出验证码；
        try {
            if (!ctx.session.lastMobileCode[mobileNum]) {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '请先获取验证码',
                };
                return;
            }
            const code = ctx.session.lastMobileCode[mobileNum].mobileCode;
            if (code != mobileCode) {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '验证码不匹配',
                };
                return;
            }
        } catch (e) {
            ctx.logger.info(`\r\n在session中取出验证码发生异常，错误为：${e}`);
            ctx.body = {
                success: false,
                code: 50001,
                msg: '未知错误',
            };
            return;
        }
        try {
            const ip = ctx.req.connection.remoteAddress;
            const user = await ctx.service.user.create({ mobile: mobileNum, password, ip });
            if (user) {
                ctx.body = {
                    success: true,
                    code: 20001,
                    msg: '注册成功',
                };
            } else {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '注册失败，未知错误',
                };
            }
        } catch (e) {
            ctx.logger.info(`\r\n注册表单数据错误信息：${e}`);
            ctx.body = {
                success: false,
                code: 50001,
                msg: '注册失败，未知错误',

            };
        }
    }

    dataValidate(formData) {
        const rules = {
            mobileCode: {
                type: 'int',
                required: true,
                max: 6,
                min: 6,
            },
            password: {
                type: 'string',
                required: true,
                min: 6,
            },
            mobileNum: {
                type: 'string',
                required: true,
                format: /^1[34578]\d{9}$/,
            },
        };
    }
}

module.exports = User;
