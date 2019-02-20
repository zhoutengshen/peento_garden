module.exports = {
    get routerUrl() {
        return {
            ...require("../const/router")
        }
    },
    isAjax() {
        return this.ctx.get("X-Requested-With") === "XMLHttpRequest" ? true : false;//ctx.get(name) === ctx.headers['name']，因为前者会自动处理大小写。
    }
}