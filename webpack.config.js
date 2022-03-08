const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: none,
	entry: {
		main: './src/index.js',
	},
	module: {
		// 打包静态资源
		rules: [
			// 图片文件
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'image/',
						limit: 2048,
					},
				},
			},
			// 字体文件
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				use: {
					loader: 'file-loader',
				},
			},
			// 样式文件
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2, // 引入模块之前加载2个loader
							// modules: true, // css模块化，优点：防止模块耦合,冲突 使用时打开
						},
					},
					'sass-loader',
					'postcss-loader',
				], // loader执行从右到左，从下到上
			},
		],
	},
	// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
	plugins: [
		new CleanWebpackPlugin(), // webpack 的 output.path 目录中的所有文件都将被删除一次
		new HtmlWebpackPlugin({
			template: 'src/index.html', // html文件模板
		}), // html-webpack-plugin 会在打包结束后自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
	],
	output: {
		// publicPath: 'http://cdn.com.cn/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
