import React from "react"
import Skelenton from "react-loading-skeleton"

const CardLoading = () => {
    return <div className="card-body">
    <div className="row mt-2">
        <div className="col">
            <Skelenton />
        </div>
    </div>
    <div className="row mt-2">
    <div className="col">
            <Skelenton />
        </div>
    </div>
    <div className="row mt-2">
    <div className="col">
            <Skelenton />
        </div>
    </div>
</div>
}

export default CardLoading