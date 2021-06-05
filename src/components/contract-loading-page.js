import React from "react"
import Skelenton from "react-loading-skeleton"
import { withRouter } from "react-router-dom"

const LoadingLayout = (props) => {
    const {location, match} = props
    let id = match.params.id
    // console.log(id !== "new" && id !== "fund-contract")
    if(id !== "new" && id !== "fund-contract"){
        return  (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="header border-0">
                            <div className="header-body">
                                <div className="row align-items-end">
                                    <div className="col">
                                        <Skelenton />
                                    <p>
                                        <Skelenton />
                                    </p>
                                    </div>
                                    <div className="col-auto">
                                        {/* <a href="/contracts/new" className="btn btn-primary">
                                            Update Contract
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <Skelenton width="100"/>
                                            </div>
                                            <div className="col-auto">
                                                <Skelenton width="200"/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row my-2">
                                            <div className="col">
                                                <Skelenton />
                                                <Skelenton />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-header-title">
                                        <Skelenton />
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                            <Skelenton />
                                            </div>
                                            <div className="col-6">
                                            <Skelenton />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                            <Skelenton />
                                            </div>
                                            <div className="col-6">
                                            <Skelenton />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card overflow-hidden">
                            <div className="card-header">
                                <Skelenton />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 justify-content-center d-flex">
                                        <div className="d-block">
                                        <Skelenton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }else{
        return <>
        </>
    }
}

export default withRouter(LoadingLayout)