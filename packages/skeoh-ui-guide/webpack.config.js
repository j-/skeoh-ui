const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = (relative) => path.resolve(__dirname, relative);

module.exports = {
	entry: resolve('./src/index.tsx'),
	output: {
		path: resolve('./dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
	},
	module: {
		rules: [
			{
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'less-loader',
					],
				}),
				test: /.(css|less)$/,
			},
			{
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: resolve('../../tsconfig.json'),
						},
					},
				],
				test: /\.tsx?$/,
			},
			{
				use: 'source-map-loader',
				test: /\.js$/,
				enforce: 'pre',
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new HTMLPlugin({
			template: resolve('./src/index.html'),
		}),
		new DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			},
		}),
	],
	devtool: 'source-map',
};
