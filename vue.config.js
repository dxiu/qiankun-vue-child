const { name } = require('./package');
module.exports = {
    devServer: {
        port: 8083, // 重点6
        headers: { // 重点7：同重点1，允许子应用跨域
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把子应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        }
    }
}