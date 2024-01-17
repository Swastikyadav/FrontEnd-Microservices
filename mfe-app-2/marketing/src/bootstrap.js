import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// Mount function to start up the app.
const mount = (elm) => {
    ReactDOM.render(
        <App />,
        elm
    );
};

// If we are in development and Isolation call mount immediately.
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#marketing_dev_root");

    if (devRoot) {
        mount(devRoot);
    }
}

// Else we assue we are running in container and we should export the mount function.
export { mount };