var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        'app1': './app/1/route/index.js'
    },
    output: {
        path: './common/dist',
        filename: '[name].js'
    },
    module: {
        devtool: 'source-map',
        loaders: [{
            test: /\.ejs$/,
            loader: 'ejs'
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [commonsPlugin]
}
