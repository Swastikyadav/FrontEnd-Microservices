import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// Mount function to start up the app.
const mount = (elm) => {
    const history = createMemoryHistory();

    ReactDOM.render(
        <App history={history} />,
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