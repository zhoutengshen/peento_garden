const { Service } = require("egg");
class User extends Service {
    async findAccPass(queryObj) {
        const {ctx} = this;
        const { model } = ctx;
        const user = await model.User.findOne({
            where: {
                ...queryObj,
            },
        });
        return user;
    }
}
module.exports = User;