const {Controller} = require("egg");

class Register extends Controller {
    async index() {
        const {ctx} = this;
        await ctx.render("/reg/index.html");
    }

    async register() {
        const {ctx} = this;
        const {mobileNum, password, mobileCode} = ctx.request.body;
        ctx.logger.debug(`\r\n注册表单数据：${ctx.request.body}`);
        try {
            this.dataValidate({mobileCode, password, mobileNum});
        } catch (e) {
            ctx.body = {
                success: false,
                code: 40006,
                msg: '提交数据有误',
            }
            return;
        }

        //在session中取出验证码；
        try {
            if (!ctx.session.lastMobileCode[mobileNum]) {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '请先获取验证码',
                }
                return;
            }
            let code = ctx.session.lastMobileCode[mobileNum].mobileCode;
            if (code != mobileCode) {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '验证码不匹配',
                }
                return;
            }
        } catch (e) {
            ctx.logger.info(`\r\n在session中取出验证码发生异常，错误为：${e}`);
            ctx.body = {
                success: false,
                code: 50001,
                msg: '未知错误',
            }
            return;
        }
        try {
            const ip = ctx.req.connection.remoteAddress;
            let user = await ctx.service.user.create({mobile: mobileNum, password: password, ip});
            if (!!user) {
                ctx.body = {
                    success: true,
                    code: 20001,
                    msg: '注册成功',
                    location: '/login',
                }
            } else {
                ctx.body = {
                    success: false,
                    code: 40006,
                    msg: '注册失败，未知错误',
                }
            }
        } catch (e) {
            ctx.logger.info(`\r\n注册表单数据错误信息：${e}`);
            ctx.body = {
                success: false,
                code: 50001,
                msg: '注册失败，未知错误',

            }
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
        }
    }
}

module.exports = Register;