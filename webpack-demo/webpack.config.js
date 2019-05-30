module.exports = {
	devtool: 'eval-source-map', // 只在开发时使用
	entry: __dirname + '/app/main.js', //唯一入口文件
	output: {
		path: __dirname + '/public', // 打包后文件存放路径
		filename: 'bundle.js' // 打包后输出文件的文件名
	},

	devServer:{
		contentBase: './public', // 本地服务器加载页面所在目录
		historyApiFallback: true, // 不跳转
		inline: true // 实施刷新
	}
};
