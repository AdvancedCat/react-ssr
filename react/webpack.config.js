const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        // 输出到public目录下
        path: path.join(__dirname, '..', 'public/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',

    module:{
        rules:[{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: [path.resolve(__dirname, '/node_modules')],
            include: __dirname
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader'],
            include: /css/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals:{
        'zepto':'Zepto',
        'react'     : 'React',
        'react-dom' : 'ReactDOM'
    }
}