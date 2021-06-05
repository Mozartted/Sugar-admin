import React, { Component, Fragment } from "react"
import {Link} from "react-router-dom"
import classnames from "classnames"


export default class SideBar extends Component{
    
    constructor(props){
        super(props)
    }

    render(){

        // const sidebarItemClass = ;

        return (
            <Fragment>
                 <div className="col-4 d-md-block d-none bg-light">
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-12 mb-auto d-flex">
                                <img className="mx-auto" src={require('../assets/img/logo.svg')}/>
                            </div>
                        </div>
                        <div className="mt-3 row"></div>
                        <div className="row mt-5 mb-5">
                            <div className="col-12 mb-auto d-flex justify-content-center">
                                <img height="160" src={this.props.image} className="d-block"/>
                           </div>
                        </div>
                        <div className="mt-3 row"></div>
                        <div className="row">
                            <div className="col-12 mb-auto">

                            </div>
                            {
                                this.props.links.map((item, index) => {
                                    return (
                                        <div className="col-12 mb-5 px-md-5 mt-4" key={index}>
                                            <div className={classnames({
                                                'col-md': true,
                                                'text-center': true,
                                            })}>
                                                <a  className={classnames({'text-inactive': !item.active, 'font-weight-bolder': item.active})} >{item.name}</a>
                                            </div>
                                        </div> 
                                    )
                                })
                            }
                            {/* <div className="col-12 mb-5 px-md-5 mt-4">
                                <div className="col-md text-secondary text-center">
                                     <Link to="/emailconfirmation" className="text-secondary">Verify Email</Link>
                                </div>
                            </div>
                            <div className="col-12 mb-5 px-md-5 mt-4">
                                <div className="col-md text-secondary text-center">
                                      <Link to="/addphone" className="text-secondary">Add Phone number</Link>
                                </div>
                            </div>
                            <div className="col-12 mb-5 px-md-5 mt-4">
                                <div className="col-md text-secondary text-center">
                                      <Link to="/phoneconfirm" className="text-secondary">Verify Phone number</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}