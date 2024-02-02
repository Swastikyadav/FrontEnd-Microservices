import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import Signup from "./components/Signup";

/**
 * Configures the class name generator utility from Material UI Styles. 
 * Sets the production prefix to "ma" which will prefix all 
 * generated class names in production.
 */
const generateClassName = createGenerateClassName({
    productionPrefix: "au",
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" component={SignIn} />
                        <Route path="/auth/signup" component={Signup} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}