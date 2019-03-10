const {Controller} = require("egg");

class Address extends Controller {
    async address() {
        const {ctx} = this;
        const {model} = ctx;
        const user = ctx.session.user;
        if (!user) {
            ctx.body = {
                success: false,
                msg: "需要登录",
            }
        } else {
            const userId = user.id;
            const address = await model.Address.findOne({
                where: {
                    "user_id": userId
                }
            });
            if (!!address) {
                ctx.body = {
                    success: true,
                    address: {
                        username: address["receive_name"],
                        mobile: address["receive_mobile"],
                        province: address["receive_province"],
                        city: address["receive_city"],
                        area: address["receive_area"],
                        detailedAddress: address["receive_detailed_address"],
                    },
                    msg: "获取成功"
                }
            } else {
                ctx.body = {
                    success: false,
                    msg: "没有数据"
                }
            }

        }
    }

    async update() {
        const {ctx} = this;
        const user = ctx.session.user;
        const {model} = ctx;
        const {values} = ctx.request.body;
        const newVals = {
            "receive_name": values.username,
            "receive_mobile": values.mobile,
            "receive_province": values.province,
            "receive_city": values.city,
            "receive_area": values.area,
            "receive_detailed_address": values.detailedAddress
        };
        if (!user) {
            ctx.body = {
                success: false,
                msg: "需要登录",
            }
        } else {
            const count = await model.Address.update(newVals, {
                where: {
                    "user_id": user.id
                }
            });
            ctx.body = {
                success: !!count[0],
                msg: !!count[0] ? "修改成功" : "修改失败"
            }
        }
    }

    async create() {
        const {ctx} = this;
        const user = ctx.session.user;
        const {model} = ctx;
        const {values, addressId} = ctx.request.body;
        if (!user) {
            ctx.body = {
                success: false,
                msg: "需要登录",
            }
        } else {
            let newValues = {
                "user_id": user.id,
                "receive_name": values.username,
                "receive_mobile": values.mobile,
                "receive_province": values.province,
                "receive_city": values.city,
                "receive_area": values.area,
                "receive_detailed_address": values.detailedAddress
            }
            const count = await model.Address.create({
                ...newValues,
            });
            ctx.body = {
                success: true,
                msg: "修改地址成功",
                count,
            }
        }
    }
}

module.exports = Address;