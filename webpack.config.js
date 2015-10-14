var webpack = require('webpack');
var CommonsPlugin = webpack.optimize.CommonsChunkPlugin;


module.exports = {
    entry: {
        '1/dist/index': './app/1/route/index.js'
    },
    output: {
        path: './app/',
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
    plugins: [new CommonsPlugin('common.js')]
}
