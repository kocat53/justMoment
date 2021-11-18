const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue'],
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import '@/scss/base';`,
			},
		},
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
			},
		},
	},
}
