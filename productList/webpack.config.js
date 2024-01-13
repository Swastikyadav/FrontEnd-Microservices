const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductIndex": "./src/index"
            }
        }),
        new HtmlWebpackPlugin({
            // Whatever file names coming out from webpack will be used as the entry point
            template: "./public/index.html",
        })
    ],
}