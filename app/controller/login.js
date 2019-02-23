'use strict';
const {Controller} = require('egg');
const ACCOUNT_TYPE = {
    username: 0,
    email: 1,
    mobile: 2,
    account: 3,
    mobileCode: 4
};

class Login extends Controller {
    //get 请求 ：登录页面
    async index() {
        const ctx = this.ctx;
        await ctx.render('login/index.html', {"csrf": ctx.csrf});
    }

    //post请求，登录请求，成功返回json
    async loginValidated() {
        const ctx = this.ctx;
        let loginSuccess = false;
        const formData = ctx.request.body;
        const {account, password, accountType, rememberMe} = formData;// password是经过md5加密的
        ctx.logger.debug(`\r\n输出位置：${__filename}\r\n表单数据：accountType：${accountType},account：${account},password：${password},rememberMe:${rememberMe}`);
        try {//表单校验失败
            // this.formValidated(formData);
        } catch (error) {
            ctx.status = 406;//设置状态吗
            ctx.body = {//设置返回的json
                success: false,
                code: 40006,
                msg: "登录失败，输入信息有误"
            }
            ctx.logger.debug(`\r\n输出位置：${__filename} 表单校验不通过;${JSON.stringify(error)}`);
            return;
        }

        //验证码登录
        if (accountType == ACCOUNT_TYPE.mobileCode) {
            try {
                let mobileCode = ctx.session.lastMobileCode[account].mobileCode;
                if (!!mobileCode && mobileCode == password) {//登录成功
                    loginSuccess = true;
                } else {
                    ctx.body = {//设置返回的json
                        success: false,
                        code: 40006,
                        msg: "登录失败，验证码错误"
                    }
                    return;
                }
            } catch (e) {
                ctx.body = {//设置返回的json
                    success: false,
                    code: 40006,
                    msg: "登录失败，缺少验证码"
                }
                return;
            }
        }
        const queryObj = {// 查询条件
        };

        if (accountType != ACCOUNT_TYPE.mobileCode) {//密码登录查询条件
            queryObj.password = password;
        }

        if (accountType == ACCOUNT_TYPE.username) {
            queryObj.username = account;
        } else if (accountType == ACCOUNT_TYPE.email) {
            queryObj.email = account;
        } else if (accountType == ACCOUNT_TYPE.mobile || accountType == ACCOUNT_TYPE.mobile) {
            queryObj.mobile = account;
        } else {
            queryObj.account = account;
        }

        const user = await ctx.service.user.findAccPass(queryObj);

        if (!user) {//不匹配
            ctx.set("Content-Type", "application/json");
            ctx.status = 406;//设置状态吗
            ctx.body = {//设置返回的json
                success: false,
                code: 40006,
                msg: "登录失败，密码或者账号名错误"
            }
        } else {//登录成功
            loginSuccess = true;
        }
        if (loginSuccess) {
            ctx.logger.debug(`\r\n$输出位置：${__filename}\r\n登录成功`);
            ctx.session.user = user;
            if (rememberMe) {//用户点击了记住我，cookie 一个月后过期
                ctx.session.maxAge = 30 * 24 * 60 * 60 * 1000;
            }
            ctx.set("Content-Type", "application/json");
            ctx.status = 200;//设置状态吗
            ctx.body = {//设置返回的json
                success: true,
                code: 10001,
                msg: "登录成功",
                location: "/"
            }
        }
    }

    //检查账户是否存在
    async check() {
        const {ctx} = this;
        const {accountType, account} = ctx.request.query;
        ctx.status = 200;
        ctx.logger.debug(`\r\n输出位置：${__filename}\r\n表单数据：accountType：${accountType},account：${account}`);
        if (accountType == ACCOUNT_TYPE.mobile || accountType == ACCOUNT_TYPE.mobileCode) {
            const user = await ctx.service.user.findAccByMobile(account);
            if (!!user) {
                ctx.body = {
                    success: true,
                    code: 20001,
                    msg: '校验成功',
                }
            } else {
                ctx.body = {
                    success: false,
                    code: 40001,
                    msg: '该手机号码未注册'
                }
            }
        } else if (accountType == ACCOUNT_TYPE.email) {
            const user = await ctx.service.user.findAccByEmail(account);
            if (!!user) {
                ctx.body = {
                    success: true,
                    code: 20001,
                    msg: '校验成功',
                }
            } else {
                ctx.body = {
                    success: false,
                    code: 40001,
                    msg: '该邮箱未注册'
                }
            }
        } else {
            ctx.body = {
                success: false,
                code: 40001,
                msg: '未知账号类型'
            }
        }
    }

    //获取手机验证码
    async getMobileCode() {
        const {ctx} = this;
        const {mobileNum} = ctx.request.query;
        ctx.logger.debug('\r\n手机号码为' + mobileNum);
        if (!mobileNum) {
            let reg = /^1[34578]\d{9}$/;
            if (!reg.test(mobileNum)) {
                ctx.body = {
                    success: false,
                    code: 40001,
                    msg: '手机号码不正确',
                }
                return;
            }
        }
        let mobileCode = Math.random().toString().slice(-6);
        let currentTime = (new Date()).getTime();//获取当前时间戳
        let lastMobileCode = ctx.session.lastMobileCode;//上一次获取到的验证码
        try {
            if (!!lastMobileCode && !!lastMobileCode[mobileNum]) {//有验证码信息
                if (lastMobileCode[mobileNum].endTime < currentTime) {//验证码过期
                    console.log("验证码过期..........");
                    //第三方平台发送验证码；
                    //设置新的验证码
                    lastMobileCode[mobileNum].endTime = currentTime + 10 * 60 * 1000;//10 分钟后
                    lastMobileCode[mobileNum].mobileCode = mobileCode;
                }
            } else {//没有验证码信息
                //第三方平台发送验证码；
                //设置新的验证码
                ctx.session.lastMobileCode = {};
                ctx.session.lastMobileCode[mobileNum] = {
                    endTime: currentTime + 10 * 60 * 1000,
                    mobileCode
                }
            }
            ctx.body = {
                success: true,
                code: 20001,
                msg: '发送成功',
            }
            ctx.logger.debug(`\r\n输出位置：${__filename}\r\n，验证码：${ctx.session.lastMobileCode[mobileNum].mobileCode}`);
        } catch (e) {
            console.log(e);
            ctx.body = {
                success: false,
                code: 50001,
                msg: '发送失败',
            }
        }
    }


    //表单校验
    formValidated(formData) {
        const rules = {
            password: {
                required: true,
                type: 'string',
            }
        };
        if (formData.accountType == ACCOUNT_TYPE.email) {
            rules.account = {
                required: true,
                type: 'email'
            }
        } else if (formData.accountType == ACCOUNT_TYPE.mobile) {
            rules.account = {
                required: true,
                type: 'string',
                format: /^1[34578]\d{9}$/,
            }
        } else {
            new Error('未知账号类型');
        }
        this.ctx.validate(rules, formData);
    }
}

module.exports = Login;
