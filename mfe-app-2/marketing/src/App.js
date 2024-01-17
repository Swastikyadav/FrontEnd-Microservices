import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

export default () => {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path="/pricing" component={PricingPage} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}