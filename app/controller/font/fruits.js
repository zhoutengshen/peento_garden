'use strict';
const Controller = require('egg').Controller;

class Fruit extends Controller {
    async list() {
        const { ctx } = this;
        try {
            const { offset = 0, limit = 10 } = ctx.request.query;
            ctx.logger.debug(`\r\n offset:${offset},limit:${limit}`);
            const fruitList = await ctx.model.Fruit.findAll({
                limit: parseInt(limit),
                offset: parseInt(offset),
            });
            const result = fruitList.map(fruit => {
                return {

                    id: fruit.id,
                    fruitTitle: fruit.fruit_title,
                    summary: fruit.summary,
                    price: fruit.price,
                    originalPrice: fruit.original_price,
                    unit: fruit.unit,
                    buyerCount: fruit.buyer_count,
                    fruitImgUrl: fruit.fruit_img_url,
                };
            });
            ctx.body = {
                success: true,
                fruits: result,
                code: 2001,
                msg: '获取成功',
            };
            return;
        } catch (e) {
            ctx.body = {
                success: false,
                fruits: [],
                code: 5001,
                msg: '获取失败',
            };
        }
    }
}

module.exports = Fruit;
