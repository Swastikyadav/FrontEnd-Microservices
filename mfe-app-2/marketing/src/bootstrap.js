import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app.
const mount = (elm, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    };

    ReactDOM.render(
        <App history={history} />,
        elm
    );

    // Return the onParentNavigate function to be used by the parent.
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const pathname = history.location.pathname;

            if (pathname!== nextPathname) { // Avoid any potential infinite loop.
                history.push(nextPathname);
            }
        }
    };
};

// If we are in development and Isolation call mount immediately.
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#marketing_dev_root");

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// Else we assue we are running in container and we should export the mount function.
export { mount };