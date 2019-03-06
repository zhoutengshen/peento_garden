const {Controller} = require("egg");

class Cart extends Controller {
    async carts() {
        const {ctx} = this;
        const {model} = ctx;
        const carts = await model.Cart.findAll();
        if (!!carts) {
            ctx.body = {
                success: true,
                msg: "获取购物车成功",
                code: 2001,
                carts: carts,
            }
        } else {
            ctx.body = {
                success: false,
                msg: "获取购物车失败",
                code: 4001,
            }
        }
    }

    async addCarts() {
        const {ctx} = this;
        const {model} = ctx;
        const {carts} = ctx.request.body;
        const user = ctx.session.user;
        if (!user) {
            ctx.body = {
                success: false,
                msg: "登录失败",
                code: 4006,
            }
            return
        }
        const userId = user.id;
        let fruitIds = [];
        if (carts instanceof Array) {
            for (let item of carts) {
                console.log(item)
                try {
                    const result = await model.Cart.findOne({
                        where: {
                            "fruit_id": item.id
                        }
                    });
                    if (!!result) {
                        const count = result.num + item.num;
                        console.log("update a cart");
                        await model.Cart.update({
                            "num": count
                        }, {
                            where: {
                                "fruit_id": item.id
                            }
                        });
                    } else {
                        console.log("create a cart");
                        const newCart = {
                            "user_id": userId,
                            "fruit_id": item.id,
                            "summary": item.summary,
                            "num": item.num,
                            "status": 1,
                            "fruit_title": item.fruitTitle,
                            "price": item.price,
                            "unit": item.unit,
                            "original_price": item.originalPrice,
                            "fruit_img_url": item.fruitImgUrl,
                        }
                        await model.Cart.create(newCart);
                    }
                    fruitIds.push(item.id);
                } catch (e) {
                    console.log(e);
                }
            }
        }

        ctx.body = {
            fruitIds,
        }
    }

    async updateCarts() {
        const {ctx} = this;
        const {id, num} = ctx.request.body;
        const {model} = ctx;
        if (num <= 0) {
            ctx.body = {
                success: false,
                msg: "输入不不能小于0"
            }
        }
        const result = model.Cart.update({
            num
        }, {
            where: {
                id,
            }
        });
        if (result) {
            ctx.body = {
                success: true,
                msg: "更新成功"
            }
        } else {
            ctx.body = {
                success: false,
                msg: "更新失败"
            }
        }

    }

    async delCart() {
        const {ctx} = this;
        console.log(ctx.request);
    }
}

module.exports = Cart;
