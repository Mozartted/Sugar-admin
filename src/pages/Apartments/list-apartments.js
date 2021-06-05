import React, { useState} from "react"
import { useMutation, useQuery} from '@apollo/react-hooks';
import {Link} from "react-router-dom"
import {APARTMENTS} from "../../utils/queries"
import { Apartments } from "pages";

const Layout = (props) => {

    const [state, updateState ] = useState({
            currentlySelected: null,
            apartments: []
        }
    )

    
    const {data, loading} = useQuery(APARTMENTS, {
        onCompleted: (response) => {
            console.log(response)
            updateState({
                ...state,
                apartments: response.apartments
            })
        }
    })

    const setSelected = (index) => {
        updateState({
            ...state,
            currentlySelected: state.apartments[index]
        })
    }

    return(
        <div className="container">
            <div className="row justify-content-center mt-3">
                <h1 className="text-center">Welcome to SugarLiving</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="header ">
                        <div className="header-body">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="header-pretitle">
                                    Members
                                    </h6>
                                    
                                    <h1 className="header-title">
                                    Apartments
                                    </h1>
                                </div>
                                <div className="col-auto">
                                    <Link to="/upload" className="btn btn-primary">
                                        Upload Apartment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="table-responsive">
                <table className="table table-sm table-nowrap">
                    <thead>
                        <tr>
                        <th scope="col">Apartment Name</th>
                        <th scope="col">Number of Doors</th>
                        <th scope="col">Number of residents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !loading ? 
                            <>
                                {
                                    data.apartments.map((apartment, index) => {
                                        return <tr key={index} onClick={() => setSelected(index)}>
                                            <td>{apartment.name}</td>
                                            <td>{apartment.doors.length}</td>
                                            <td>{apartment.users.length}</td>
                                        </tr>
                                    })

                                }
                            </>: 
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </tbody>
                </table>
                </div>
            </div>
            {
                state.currentlySelected ?
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col">
                                <h3>Doors</h3>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-sm table-nowrap">
                                <thead>
                                    <tr>
                                    <th scope="col">Door</th>
                                    <th scope="col">Acme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !loading ? 
                                        <>
                                            {
                                                state.currentlySelected.doors.map((door, index) => {
                                                    return <tr key={index}>
                                                        <td>{door.name}</td>
                                                        <td>{door.acme_id}</td>
                                                    </tr>
                                                })

                                            }
                                        </>: 
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row">
                            <div className="col">
                                <h3>Residents</h3>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-sm table-nowrap">
                                <thead>
                                    <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Doors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !loading ? 
                                        <>
                                            {
                                                state.currentlySelected.users.map((user, index) => {
                                                    return <tr key={index}>
                                                        <td>{user.first_name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.doors.map(door => door.name).toString()}</td>
                                                    </tr>
                                                })

                                            }
                                        </>: 
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Layout;