import React, { useEffect, Component, useState } from "react"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import classnames from "classnames"
import buttonCircleSvg from "../assets/img/button-circle.svg"
import moment from "moment"


const DateInput = (props) => {
    
    const refPoint = React.createRef();
    useEffect(()=> {
        flatpickr(refPoint.current, {
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: moment.now(),
            // selectedDates: props.val ? [props.val]: [],

            onChange: (selectedDate, date, dateInstance) => {
                const params = {
                    target: {
                        name: props.name,
                        value: selectedDate[0]
                    }
                }
                props.onChange(params)
            }
        })
    },[]);

    return (<input ref={refPoint} className="form-control"  {...props}/>);
}

const LightButton = (props) => {
    const propsUpdate = {
        ...props,
        className: classnames({'btn btn-light': true,[props.className]: true})
    }
    return <button {...propsUpdate}>
        <img src={buttonCircleSvg} width="15"/>
        {props.children}
    </button>
}


const Form = {};
// FORM merging into individual sets.
Form.DateInput = DateInput; 
Form.LightButton = LightButton; 


export default Form;