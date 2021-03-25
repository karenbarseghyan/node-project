const http = require('http');
const express = require('express');
const router = require("./router");

const app = express();
app.set('port', 3000);
router(app);

const server = http.createServer(app);
server.listen(3000);