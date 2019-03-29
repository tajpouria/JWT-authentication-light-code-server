const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth", () =>
  console.log("Connected to DB ...")
);

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
routes(app);

const port = process.env.PORT || 3009;
const server = http.createServer(app);
server.listen(port, console.log(`Listening on port ${port} ...`));
