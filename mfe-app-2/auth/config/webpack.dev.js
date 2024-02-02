const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    /**
 * Sets the publicPath property for webpack dev server. 
 * This tells webpack where to serve the output files from.
 * Using http://localhost:8082/ will serve the files from port 8082 on localhost.
 */
    output: {
        publicPath: "http://localhost:8082/",
    },
    devServer: {
        port: 8082,
        historyApiFallback: { // For navigation purposes.
            index: "/index.html"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthApp": "./src/bootstrap.js",
            },
            shared: packageJson.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, devConfig);