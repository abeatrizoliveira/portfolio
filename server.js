const path = require("path");

const dotenv = require("dotenv");
dotenv.config({quiet:true});

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});

const publicPath = path.join(__dirname, "public");
const pagesPath = path.join(publicPath, "pages");
const assetsPath = path.join(publicPath, "assets");

app.use("/", express.static(pagesPath));
app.use("/assets", express.static(assetsPath));
