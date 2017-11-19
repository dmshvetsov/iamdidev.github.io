var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: ['./src/main.js', './src/main.sass'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets')
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
        new ExtractTextPlugin('style.css'),
    ],
    devServer: {
        publicPath: '/assets/'
    }
};
