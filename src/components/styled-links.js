import React from "react"
import {NavLink, withRouter} from "react-router-dom"

const StyledLinks = ({to, location, className, renderActiveIcon, renderInactiveIcon, children}) => {
    const isActive = to === location.pathname;
    return (
            <NavLink
                className={className}
                to={to}
                onClick={() => {
                    window.$('#modalVerticalLeft').modal('hide')}
                }
            >
                <span  className="pb-1">
                    {isActive ? renderActiveIcon() : renderInactiveIcon() }
                </span>
                <span className="px-2">
                    {children}
                </span>
            </NavLink>
    );
}

// Wrap your component withRouter to get location prop
export default withRouter(StyledLinks);