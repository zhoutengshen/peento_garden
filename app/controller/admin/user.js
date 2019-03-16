'use strict';
const { Controller } = require('egg');

class User extends Controller {
    async create() {
    }
    async remove() {
    }
    async update() {

    }
    async user() {
        const { ctx } = this;
        const { model } = ctx;
        const admin = ctx.session.admin;
        if (admin) {
            const id = admin.id;
            const temp = await model.AdminRole.findAll({
                where: {
                    admin_id: id,
                },
            });
            const roles = [];
            for (const item of temp) {
                const role = await model.Role.findOne({
                    where: {
                        id: item.role_id,
                    },
                });
                roles.push(role.role_name);
            }
            admin.roles = [ ...roles ];
            ctx.body = {
                success: true,
                user: {
                    token: admin.id,
                    introduction: admin.introduction,
                    avatar: admin.avatar,
                    roles: [ ...roles ],
                },
                code: 2001,
            };
        } else {
            ctx.body = {
                success: false,
                msg: '没有登录',
                code: 4003,
            };
        }
    }

}
module.exports = User;
