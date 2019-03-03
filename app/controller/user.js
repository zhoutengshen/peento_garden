const {Controller} = require("egg")

class User extends Controller {
    async info() {
        const {ctx} = this;
        if (!!ctx.session.user) {
            const user = ctx.session.user;
            const userId = user.id;
            const newUser = await ctx.model.User.findOne({
                where: {
                    id: userId,
                }
            });
            ctx.session.user = newUser;
            ctx.body = {
                success: true,
                user: {
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
                msg: "获取用户数据成功"
            }
        } else {
            ctx.body = {
                success: false,
                code: 40006,
                msg: "获取用户数据失败"
            }
        }

    }
}

module.exports = User;