import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "marketing/MarketingApp";

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname!== nextPathname) { // Avoid any potential infinite loop.
                    history.push(nextPathname);
                }
            }
        });
    }, []);

    return <div ref={ref} />
}