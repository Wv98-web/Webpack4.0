### 环境依赖

``` 
node v14.16.0
webpack v4.46.0
webpack-cli v4.9.2
```

### 问题
1. webpack是什么?
   模块打包工具

2. 模块是什么?
   文件

3. webpack配置文件作用是什么?
   辅助webpack打包，这个文件将所有的配置项导出，webpack会读取这个配置文件，根据配置文件中的配置项，执行相应的操作

4. loader是什么?
   webpack默认知道打包js模块文件，打包加载其他格式资源文件需要loader

### 部署步骤

1. 添加系统环境变量
    export $PORTAL_VERSION="production" // production, test, dev
2. npm install  //安装node运行环境

3. npm build   //前端编译

4. 启动两个配置
    eg: forever start app-service.js
        forever start logger-service.js

### 目录结构描述
├── README.md                   // help
├── app                         // 应用
├── config                      // 配置
│   ├── default.json
│   ├── dev.json                // 开发环境
│   ├── experiment.json         // 实验
│   ├── index.js                // 配置控制
│   ├── local.json              // 本地
│   ├── production.json         // 生产环境
│   └── test.json               // 测试环境
├── data
├── doc                         // 文档
├── environment
├── gulpfile.js
├── locales
├── logger-service.js           // 启动日志配置
├── node_modules
├── package.json
├── app-service.js              // 启动应用配置
├── static                      // web静态资源加载
│   └── initjson
│       └── config.js           // 提供给前端的配置
├── test
├── test-service.js
└── tools

### V1.0.0 版本内容更新
1. 新功能     aaaaaaaaa
2. 新功能     bbbbbbbbb
3. 新功能     ccccccccc
4. 新功能     ddddddddd