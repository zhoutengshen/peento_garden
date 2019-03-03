const {Controller} = require("egg");

class Logout extends Controller {
    async destroy() {
        const {ctx} = this;
        const {session} = ctx;
        const {user} = session;
        if (!!user) {//已经登录的用户
            session.user = null;//销毁session
            ctx.body = {
                success: true,
                code: 20001,
                message: "注销成功",
                location: "/"
            }
        } else {
            ctx.body = {
                success: false,
                code: 40006,
                message: "未登录用户",
            }
        }
    }
}

module.exports = Logout;