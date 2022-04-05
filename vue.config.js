const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  pwa: {
    name: 'KeepVue',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
  }
})
