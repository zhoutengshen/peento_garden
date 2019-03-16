'use strict';
const { Service } = require('egg');

class User extends Service {
    async findAccPass(queryObj) {
        const { ctx } = this;
        const { model } = ctx;
        const user = await model.User.findOne({
            where: {
                ...queryObj,
            },
        });
        return user;
    }

    async findAccByMobile(mobileNum) {
        const { ctx } = this;
        const { model } = ctx;
        const user = await model.User.findOne({
            where: {
                mobile: mobileNum,
            },
        });
        return user;
    }

    async findAccByEmail(email) {
        const { ctx } = this;
        const { model } = ctx;
        const user = await model.User.findOne({
            where: {
                email,
            },
        });
        return user;
    }


    async findAccByUserName() {//eslint-disable-line

    }

    async create(user) {
        const { ctx } = this;
        const { model } = ctx;
        user.account = Math.random().toString().slice(-10);// 随机账号
        user.status = 1;
        const timeStamp = new Date().getTime();
        user.created_at = timeStamp;
        user.updated_at = timeStamp;
        return await model.User.create({ ...user });
    }
}

module.exports = User;
