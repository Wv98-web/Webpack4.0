const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
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
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				use: {
					loader: 'file-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					'sass-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
			cleanStaleWebpackAssets: false,
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all', // async | initial | all all需要配合cacheGroups使用
			minSize: 30000, // 大于30kb 进行分割
			maxSize: 0, // 超过maxsize 尝试二次分割
			minChunks: 1, // 模块使用多少次，分割
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10, // 优先级
					// filename: 'vender.js', // 分割文件名
				},
				default: {
					// minChunks: 2,
					priority: -20,
					reuseExistingChunk: true, // 忽略打包过的模块
				},
			},
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
	},
};
