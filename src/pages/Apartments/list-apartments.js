import React, { useState} from "react"
import { useMutation, useQuery} from '@apollo/react-hooks';
import {Link} from "react-router-dom"
import {APARTMENTS} from "../../utils/queries"

const Layout = (props) => {

    const [state, updateState ] = useState({
            agencies: [],
            passwordVisible: false,
            params: {},
            loading: false,
            links: [
                // {
                //     anchor: "/signup",
                //     name: "Enter personal information",
                //     active: true
                // },
                // {
                //     anchor: "/emailconfirmation",
                //     name: "Verify email"
                // },
                // {
                //     anchor: "/addphone",
                //     name: "Add phone number"
                // },
                // {
                //     anchor: "/phoneconfirmation",
                //     name: "Verify phone number"
                // },
            ]
        }
    )

    const {data, loading} = useQuery(APARTMENTS, {
        onCompleted: (response) => {
            console.log(response)
        }
    })

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
                                        return <tr key={index}>
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
        </div>
    )
}

export default Layout;