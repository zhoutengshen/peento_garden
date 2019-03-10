const {Controller} = require("egg");

class Order extends Controller {
    async order() {//获取该用户所有的订单
    }

    async addOrder() {//添加一个订单，参数为购物车选中的物品
        const {ctx} = this;
        const {model} = ctx;
        const {carts} = ctx.request.body;
        let transaction;
        try{
            transaction =await model.transaction;
            // const
            // await model.Order.create
        }catch (e) {

        }
    }
}

module.exports = Order;