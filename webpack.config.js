const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

// webpack 模块打包工具

module.exports = {
	mode: 'development', // 打包环境

	/**
	 * SourceMap 它是一个映射关系，他知道dist目录下main.js文件某行，实际上对应的是src目录下index.js文件中的哪一行
	 *
	 * source-map : 会生成一个.map的文件
	 * inline-source-map : 会将.map的文件合并到打包生成的目标文件中
	 * cheap : 只提示多少行，不提示多少列； 只负责业务代码中的错误，不管loader中错误
	 * module : 除了业务代码外，也管loader
	 * eval : 通过eval的js执行形式来生成SourceMap的对应关系  执行效率最快性能最好的打包方式
	 *
	 */
	devtool: 'cheap-module-eval-source-map', // development环境
	// devtool: 'cheap-module-source-map', // production环境

	// 入口
	entry: {
		main: './src/index.js',
	},

	/**
	 * 三种提升开发效率方式
	 * 1、package.json中配置"webpack --watch" 监控webpack自动打包，缺点以文件形式打开网页，不能启动一个服务器，无法使用ajex
	 * 2、使用webpack-dev-server第三方模块 在webpack.config.js中做一些devServer的配置，后在package.json做启动配置 "webpack serve" （推荐使用）
	 * 3、在node中使用webpack package.json中配置启动"node server.js"，使用express搭建http服务器，通过中间件启动
	 */
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		/**
		 * 热模块替换 Hot Module Replacement hmr
		 */
		hot: true,
		hotOnly: true,
	},

	module: {
		// 打包静态资源
		rules: [
			// es6文件
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// 通过.babelrc配置
					// options: {
					// 	// 两种情况
					// 	// 1、只是业务代码 配置presets 使用@babel/preset-env 且业务代码中引入@babel/polyfill
					// 	presets: [
					// 		[
					// 			'@babel/preset-env',
					// 			{
					// 				targets: '> 0.25%, not dead', // 根据浏览器转换
					// 				useBuiltIns: 'usage', // 根据业务代码需求加载转换
					// 			},
					// 		],
					// 	],
					// 	// 2、库项目代码， 配置plugins 使用@babel/plugin-transform-runtime
					// 	plugins: [
					// 		[
					// 			'@babel/plugin-transform-runtime',
					// 			{
					// 				absoluteRuntime: false,
					// 				corejs: 2,
					// 				helpers: true,
					// 				regenerator: true,
					// 				version: '7.0.0-beta.0',
					// 			},
					// 		],
					// 	],
					// },
				},
			},
			// 图片文件
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'image/',
						limit: 2048, // 文件小于2048字节，将这个文件以base64形式放入打包文件夹  减少小图http请求
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
				test: /\.scss$/,
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
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},

	// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html', // html文件模板
		}), // html-webpack-plugin 会在打包结束后自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // webpack 的 output.path 目录中的所有文件都将被删除一次  cleanStaleWebpackAssets: false除了index.html
		new webpack.HotModuleReplacementPlugin(), // webpack自带 实现hmr功能
	],

	// Tree Shaking 按需 模块引入
	// development环境下需要配置
	// package.json 文件中 配置 sideEffects: false; // 默认false, sideEffects: ["@babel/polyfill","*.css"]
	optimization: {
		usedExports: true,
	},

	// 输出
	output: {
		// publicPath: '/',
		filename: '[name].js', // name是根据 entry的key值决定，所以输出 main.js
		path: path.resolve(__dirname, 'dist'),
	},
};
