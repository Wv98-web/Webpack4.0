const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

// 在node中使用webpack
const complier = webpack(config); // 编译器
const app = express();

app.use(
	webpackDevMiddleware(complier, {
		publicPath: config.output.publicPath,
	})
);

app.listen(3000, () => {
	console.log('server is running');
});
