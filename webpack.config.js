const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    mode:'development',
    devServer:{
        contentBase : path.resolve(__dirname , 'public'),
        port:3000,
        hot:true
    },
    output:{
        path:path.resolve(__dirname ,'public/js'),
        filename : 'app.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use : [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader , "css-loader", "sass-loader"]
            },
            {
                test:/\.(svg|jpeg|jpg|png)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin()
    ]
          
    

}