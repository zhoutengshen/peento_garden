const {Controller} = require("egg")

class CityAlliance extends Controller {
    async provinces() {
        const {ctx} = this;
        const {model} = ctx;
        const provinces = await model.Province.findAll();
        const result = [];
        for (let index in provinces) {
            result.push({
                id: provinces[index].provinceID,
                name: provinces[index].province
            })
        }
        ctx.body = {
            success: true,
            provinces: result,
            msg: "获取成功",
        }
    }

    async cities() {
        const {ctx} = this;
        const {model} = ctx;
        const {id} = ctx.params;
        const cities = await model.City.findAll({
            where: {
                father: id,
            }
        });
        const result = [];
        for (let index in cities) {
            result.push({
                id: cities[index].cityID,
                name: cities[index].city
            })
        }
        ctx.body = {
            success: true,
            cities: result,
            msg: "获取成功",
        }
    }

    async areas() {
        const {ctx} = this;
        const {model} = ctx;
        const {id} = ctx.params;
        const areas = await model.Area.findAll({
            where: {
                father: id,
            }
        });
        const result = [];
        for (let index in areas) {
            result.push({
                id: areas[index].areaID,
                name: areas[index].area
            })
        }
        ctx.body = {
            success: true,
            areas: result,
            msg: "获取成功",
        }
    }
}

module.exports = CityAlliance;