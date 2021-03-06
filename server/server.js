"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var delete_1 = require("./delete/delete");
app.use("/fetch", fetch_1["default"]);
app.use("/insert", insert_1["default"]);
app.use("/update", update_1["default"]);
app.use("/delete", delete_1["default"]);
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("server started at the port no: ", port);
});
