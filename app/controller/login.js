'use strict';
const { Controller } = require('egg');
const LOGIN_TYPE = {
  username: 0,
  email: 1,
  mobile: 2,
  account: 3,
};
class Login extends Controller {
  //get 请求 ：登录页面
  async index() {
    const ctx = this.ctx;
    await ctx.render('login/index.html', { "csrf": ctx.csrf });
  }

  //post请求，登录请求，成功返回json
  async loginValidated() {
    const ctx = this.ctx;

    const formData = ctx.request.body;
    const { account, password, loginType, rememberMe } = formData;// password是经过md5加密的

    ctx.logger.debug(`\r\n输出位置：${__filename}\r\n表单数据：loginType：${loginType},account：${account},password：${password},rememberMe:${rememberMe}`);


    try {//表单校验失败
      let err = this.formValidated(formData);
    } catch (error) {
      ctx.status = 406;//设置状态吗
      ctx.body = {//设置返回的json
        success: false,
        code: 40006,
        msg: "登录失败，输入信息有误"
      }

      ctx.logger.debug(`\r\n输出位置：${__filename} 表单校验不通过;${JSON.stringify(error.errors)}`);
      return;
    }



    const queryObj = {// 查询条件
      password,
    };

    if (loginType == LOGIN_TYPE.username) {
      queryObj.username = account;
    } else if (loginType == LOGIN_TYPE.email) {
      queryObj.email = account;
    } else if (loginType == LOGIN_TYPE.mobile) {
      queryObj.mobile = account;
    } else {
      queryObj.account = account;
    }

    const user = await ctx.service.user.findAccPass(queryObj);



    if (!user) {//密码或者账号名错误
      ctx.set("Content-Type", "application/json");
      ctx.status = 406;//设置状态吗
      ctx.body = {//设置返回的json
        success: false,
        code: 40006,
        msg: "登录失败，密码或者账号名错误"
      }
    } else {//登录成功
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

  //表单校验
  formValidated(formData) {
    const rules = {
      password: {
        type: 'string',
        required: true,
      }
    }
    //LOGIN_TYPE.username校验规则
    if (LOGIN_TYPE.username == formData.loginType) {
      rules.account = {
        type: 'string',
        required: true,
        format: /^[a-zA-Z0-9_-]{4,16}$/,//4到16位（字母，数字，下划线，减号）
      };
    } else if (LOGIN_TYPE.email == formData.loginType) {
      rules.account = {
        type: 'email',
        required: true,
      }
    } else if (LOGIN_TYPE.mobile == formData.loginType) {
      rules.account = {
        type: 'string',
        required: true,
        format: /^1[3|4|5|8][0-9]\d{4,8}$/,
      }
    } else {
      rules.account = {
        type: 'string',
        required: true,
        format: /^[0-9]{10}$/
      }
    }
    this.ctx.validate(rules, formData);
  }
}
module.exports = Login;
