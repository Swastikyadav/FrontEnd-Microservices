const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Whatever file names coming out from webpack will be used as the entry point
            template: "./public/index.html",
        })
    ],
}