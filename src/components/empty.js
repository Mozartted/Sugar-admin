import React from "react"

const image  = require("../assets/img/empty.svg")
const Empty = (props) => {
    return (
        <>
            <div className="col-12 justify-content-center d-flex">
                <div className="d-block">
                    <img src={image} width="140" className="d-block"/>
                </div>
            </div>
            <div className="d-block text-center">
                {
                        props.message ? 
                        <p>{props.message}</p>
                        : null
                    }
            </div>
            {props.children}
        </>
    )
}


export default Empty