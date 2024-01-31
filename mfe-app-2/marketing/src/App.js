import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

/**
 * Configures the class name generator utility from Material UI Styles. 
 * Sets the production prefix to "ma" which will prefix all 
 * generated class names in production.
 */
const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={PricingPage} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}