require('dotenv').config()

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

const listenPort = process.env.TARGET_PORT || 3001;
const targetPort = process.env.TARGET_PORT || 3000;

app.use(cors({ origin: true, credentials: true }))
app.use(
  createProxyMiddleware({
    target: `http://localhost:${targetPort}`,
    changeOrigin: true,
  }),
);

app.listen(listenPort);
