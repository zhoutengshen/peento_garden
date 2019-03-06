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
                code:4001,
            }
        }
    }
}

module.exports = Cart;
