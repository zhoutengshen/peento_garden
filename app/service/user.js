const {Service} = require("egg");

class User extends Service {
    async findAccPass(queryObj) {
        const {ctx} = this;
        const {model} = ctx;
        const user = await model.User.findOne({
            where: {
                ...queryObj,
            },
        });
        return user;
    }

    async findAccByMobile(mobileNum) {
        const {ctx} = this;
        const {model} = ctx;
        const user = await model.User.findOne({
            where: {
                mobile: mobileNum
            }
        });
        return user;
    }

    async findAccByEmail(email) {
        const {ctx} = this;
        const {model} = ctx;
        const user = await model.User.findOne({
            where: {
                email
            }
        });
        return user;
    }

    async findAccByUserName(userName) {

    }
}

module.exports = User;