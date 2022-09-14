# vue2

## DAY1

1.项目启动后直接打开网页：

```js
//在package.json中配置
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

项目启动后可能出现0.0.0.8080的空白页面，解决方法：

```js
//vue.config.js中配置即可解决
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    port:8080
  }
})
```

2.eslint检验关闭（不是刚需，但能降低血压）

```js
module.exports = defineConfig({
  lintOnSave:false,//关闭eslint
 }）
```

3.配置别名（src=>@）

```json
//jsconfig.json文件中配置，自带
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

