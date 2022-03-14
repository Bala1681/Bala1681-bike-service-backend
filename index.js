const express = require("express");
const mongo = require("./shared/connect")
const cors = require("cors")
const productRouter = require("./routes/products")
const registerRouter = require("./routes/register")
const authorizeModule = require("./modules/authorize")
const app = express();
app.use(cors())
app.use(express.json());
mongo.connect()
app.use("/register",registerRouter)


app.use("/product",productRouter)

const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("Success")
})


