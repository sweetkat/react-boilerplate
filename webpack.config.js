const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '8080';


module.exports =  {
    context: __dirname,
    devServer: {
        contentBase: './dist',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        inline: true,
        port: PORT,
        host: HOST
    },
    devtool: 'eval',
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        `webpack/hot/dev-server`,
        './src/index.js'],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                loaders: ['babel']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    // Entry point for node-sass files
    sassLoader: {
        includePaths: ['src/styles/index']
    },
    plugins: [
        // Define node environment to be 'develop'
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('develop')
            }
        }),
        new webpack.NoErrorsPlugin(),
        // Enable hot module reload
        new webpack.HotModuleReplacementPlugin(),
        // Generates a base html
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};