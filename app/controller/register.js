const { Controller } = require("egg");
class Register extends Controller {
    async index(){
        const {ctx} = this;
        await ctx.render("/reg/index.html");
    }
}

module.exports = Register;