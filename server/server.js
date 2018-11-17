
let express = require("express");
let app = express();

 //关键是这一句，目录是webmain的目录
app.use(express.static("../../webmain"));
 
app.listen(8099, ()=>{
    console.log("服务启动成功。");
})