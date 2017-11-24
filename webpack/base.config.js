const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: ['./src/main.js', './src/main.sass'],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../assets')
    },
    module: {
        rules: [
            {
                test: /\.scss|sass$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({ template: 'src/index.template.html' }),
    ]
};
