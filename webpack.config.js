var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "./app/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index_bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                sourceMap: true,
                                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                            }
                        },
                        'postcss-loader',
                    ]
                })

            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        HtmlWebpackPluginConfig
    ]
}