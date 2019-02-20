const { Controller } = require("egg");
class Loginout extends Controller {
    async destroy() {
        const { ctx } = this;
        const { session } = ctx;
        const { user } = session;
        if (!!user) {//已经登录的用户
            ctx.body = {
                success: true,
                code: 20001,
                message: "注销成功",
                location:"/"
            }
            session.user = null;//销毁session
        }
    }
}
module.exports = Loginout;