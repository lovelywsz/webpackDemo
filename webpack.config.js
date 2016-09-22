//Webpack 使用一个名为 webpack.config.js 的配置文件，
//要编译 JSX，先安装对应的 loader: npm install babel-loader --save-dev
//webpack-dev-server主要是启动了一个使用express的Http服务器。
//它的作用主要是用来伺服资源文件
//你启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,
//实时编译后的文件都保存到了内存当中

//NodeJS中的Path对象，用于处理目录的对象，提高开发效率
//相对路径 path.relative(from, to) 
// 特点：返回某个路径下相对于另一个路径的相对位置串，
// 相当于：path.resolve(from, path.relative(from, to)) == path.resolve(to) 

var path              = require('path'),
    webpack           = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
         path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    // entry: {
    //     page1:[ 
    //         'webpack-dev-server/client?http://0.0.0.0:8080', 
    //         'webpack/hot/only-dev-server',
    //         './app/page/entry1.js'],
    //     page2:[ 
    //         'webpack-dev-server/client?http://0.0.0.0:8080', 
    //         'webpack/hot/only-dev-server',
    //         './app/page/entry2.js']
    // },
    // output: {
    //     path: path.resolve(__dirname, './build'),
    //     publicPath: "./build/",
    //     filename: '[name].js'
    // },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            //{test: /\.css$/, loader: "style!css"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader,css-loader")},
            {test: /\.scss$/, loader: "style!css!autoprefixer!sass"},
            //{test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
        //支持所有独立样式打包成一个css文件。增加多一个参数即可。
        //new ExtractTextPlugin("style.css", {allChunks: true})
    ]
};