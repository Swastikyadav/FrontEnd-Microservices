const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products", // Don't use "products" as an element's id as it will conflict with global var created by webpack.
            filename: "remoteEntry.js",
            exposes: {
                "./ProductIndex": "./src/bootstrap",
            },
            shared: ["faker"],
        }),
        new HtmlWebpackPlugin({
            // Whatever file names coming out from webpack will be used as the entry point
            template: "./public/index.html",
        })
    ],
}