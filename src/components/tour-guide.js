import React, {Component, useState, useEffect} from "react"

// Tour guide
import Tour from "reactour"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"

const disableBody = target => disableBodyScroll(target);
const enableBody = target => enableBodyScroll(target);

const TourGuide = (props) => {

    const closeTour = () => {
        props.closeTour()
    }

    const openTour = () => {
        props.openTour()
    }
    const accentColor = "#5cb7b7";

    return (
        <Tour
            onRequestClose={closeTour}
            steps={props.tourConfig}
            isOpen={props.isTourOpen}
            maskClassName="mask"
            className="helper"
            rounded={5}
            accentColor={accentColor}
            onAfterOpen={disableBody}
            onBeforeClose={enableBody}
        />
    )
}

export default TourGuide