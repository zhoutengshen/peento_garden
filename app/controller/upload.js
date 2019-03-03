const {Controller} = require("egg");
const fs = require('mz/fs');
// const pump = require('mz-modules/pump');
const path = require("path");
const crypto = require('crypto');

class Upload extends Controller {
    async img() {
        const {ctx} = this;
        const file = ctx.request.files[0];
        if (!file) {
            ctx.body = {
                success: false,
                msg: "文件上传失败",
            }
            return;
        }
        let armUrl = ""
        try {
            //这里将非async转换为asunc
            armUrl = await (new Promise((resolve) => {
                const source = fs.createReadStream(file.filepath);
                let result = new Buffer(0);
                source.on("data", (chunk) => {
                    result = Buffer.concat([result, chunk]);
                });
                source.on("end", () => {
                    let armUrl = this.getDirect(result, path.extname(file.filename));
                    let fullFileName = path.join(this.config.baseDir, armUrl);
                    const target = fs.createWriteStream(fullFileName);
                    target.write(result);
                    resolve(armUrl);
                    ctx.logger.warn('save %s to %s', file.filepath, fullFileName);
                });
            }));
        } catch (e) {
            ctx.body = {
                success: false,
                code: 4001,
                msg: "上传失败"
            }
            return;
        } finally {
            // delete those request tmp files
            await ctx.cleanupRequestFiles();
        }
        ctx.body = {
            success:true,
            avatarUrl:armUrl,
            code:2001,
            msg:"上传成功"
        }

    }

    getDirect(result, extname) {
        let date = new Date();
        const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        let dir = path.join(this.config.baseDir,
            "/public/img",
            dateStr);
        let exist = fs.existsSync(dir);
        if (!exist) {
            fs.mkdirSync(dir);
        }
        let fsHash = crypto.createHash('md5');
        fsHash.update(result);
        let md5Str = fsHash.digest('hex');
        console.log("文件的MD5是：%s", md5Str);
        let fileName = path.join("/public/img", dateStr, md5Str + extname);
        return fileName;
    }
}

module.exports = Upload;