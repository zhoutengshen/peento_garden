'use strict';

const { Controller } = require('egg');

class Fruit extends Controller {
    async update() {
        const { ctx } = this;
        const { model } = ctx;
        const admin = ctx.session.admin;
        const { id, values } = ctx.request.body;
        const result = {
            fruit_img_url: values.fruitImgUrl,
            fruit_title: values.fruitTitle,
            original_price: values.originalPrice,
            price: values.price,
            unit: values.unit,
            discrib: values.discrib,
            sell_point: values.sellPoint,
            start_all: values.startAll,
            summary: values.summary,
            num: values.num,
            status: values.status,
            buyer_count: values.buyerCount,
            origin: values.origin,
        };
        if (!admin) {
            ctx.body = {
                success: false,
                msg: '你没有权限进行这个操作',
            };
        } else {
            const arr = await model.Fruit.update({ ...result }, {
                where: {
                    id,
                },
            });
            if (arr.length > 0) {
                ctx.body = {
                    success: true,
                    msg: '更新成功，受影响行数：' + arr[0],
                };
            } else {
                ctx.body = {
                    success: false,
                    msg: '更新成功，受影响行数：' + arr[0],
                };
            }
        }
    }
}

module.exports = Fruit;
