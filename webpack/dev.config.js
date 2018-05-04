const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    devServer: {
        publicPath: '/assets/',
        overlay: true,
        watchContentBase: true
    }
});
