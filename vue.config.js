const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,//关闭eslint
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    port:8080
  }
})
