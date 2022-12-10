const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
	outputDir: 'dist',  //build输出目录
	assetsDir: 'assets', //静态资源目录（js, css, img）
	lintOnSave: false, //是否开启eslint
	devServer: { // 环境配置
    host: '0.0.0.0',
		open: true, //配置自动启动浏览器
		port: '8081', // 设置端口号
		https: false,  //是否使用https协议
		hotOnly: false, //是否开启热更新
		proxy: {
			'/api': {
				target: process.env.VUE_APP_URL + '/api',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		}
	},
	pages: {
		index: {
			entry: 'src/main.js', 
			template: 'public/index.html',
			filename: 'index.html', 
			title: 'Asset Management System', 
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	chainWebpack: config => {
		config.entry('main').add('babel-polyfill') //兼容ie  main是入口js文件
		// config.resolve.alias.set('@', resolve('src'))
	},
	//兼容ie es6
	transpileDependencies: [
		'@jiaminghi/data-view'
		// '@tinymce/tinymce-vue',
		// 'tinymce/tinymce',
	],
	// 打包路径
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// gzip
	// eslint-disable-next-line no-unused-vars
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					new CompressionPlugin({
						algorithm: 'gzip',
						test: /\.(js|css)$/, // 匹配文件名
						threshold: 10240, // 对超过10k的数据压缩
						deleteOriginalAssets: false, // 不删除源文件
						minRatio: 0.8 // 压缩比
					})
				]
			}
		}
	}
}
