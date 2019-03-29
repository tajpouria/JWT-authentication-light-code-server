const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

const port = process.env.PORT || 3009;
const server = http.createServer(app);
server.listen(port, console.log(`Listening on port ${port} ...`));
