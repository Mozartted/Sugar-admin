import React, {Component} from "react"

const LoadingText = ({loading, text}) => {
    return loading ? <div className="spinner-grow" role="status">
    <span className="sr-only">Loading...</span>
  </div>: <>{text}</>
}

export default LoadingText