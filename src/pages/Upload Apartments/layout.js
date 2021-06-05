import React, { useState} from "react"
import { useMutation } from '@apollo/react-hooks';
import {Link} from "react-router-dom"
import cookies from "js-cookie"
import {UPLOAD_APARTMENT} from "../../utils/queries"

const Layout = (props) => {
    const {history, toastManager} = props;
    const [state, updateState ] = useState({
            params: {
                doors: null,
                residents: null,
                name: null
            }
        }
    )
    const [uploadApartmentMutation, { data, loading }, ] = useMutation(UPLOAD_APARTMENT);


   const uploadApartment = async () => {
        try {
            let resp = await uploadApartmentMutation({ variables: { ...state.params } });
            if(resp){
                toastManager.add("Successfully sign in", {
                    appearance: 'success',
                    autoDismiss: true,
                })
                setTimeout(() => {
                    history.push('/')
                }, 1000)
            }
        }catch(err){
            toastManager.add(err.message, {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    }

    const onChange = (e) => {
        let target = e.target
        updateState({
            ...state,
            params: {
                ...state.params,
                [target.name] : target.value
            }
        })
    }

    const setFiles = (e) => {
        updateState({
            ...state,
            params: {
                ...state.params,
                [e.target.name] : e.target.files[0]
            }
        })
    }

    return(
        <div className="container-fluid">
            <div className="row full-height bg-body-alt justify-content-center">
                {/* <Sidebar  image={require('../../assets/img/header-card.svg')} links={state.links}/> */}
                <div className="col-md-8 justify-content-center col-12 h-100">
                    <div className="container-fluid">
                        <div className="row mt-5 justify-content-center">
                        <div className="px-md-auto col-md-7 col-12 mt-5">
                            <div className="row mt-4 d-block d-md-none">
                                    <div className="col-12 mb-auto d-flex">
                                        <h1> Sugar Living</h1>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <h1>Upload and Apartment</h1>
                                        {/* <p className="text-secondary">Already have an account? <Link to="login"><span className="text-primary font-weight-bold">Sign in</span></Link> </p> */}
                                    </div>
                                </div>
                        </div>
                        <div className="px-md-auto col-md-7 col-12">
                                <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Apartment Name</label>
                                                <input onChange={onChange} name="name" placeholder="Enter your first name" className="form-control"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Upload door units</label>
                                                <input onChange={setFiles} name="doors" placeholder="Upload your doors" type="file" className="form-control"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Upload residents</label>
                                                <input onChange={setFiles} name="residents" type="file" className="form-control form-control-appended" placeholder="Enter a password"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <button className="btn btn-primary btn-block"  onClick={uploadApartment}>
                                            {/* {
                                                loading ? 
                                            //     <div className="spinner-grow" role="status">
                                            //     <span className="sr-only">Loading...</span>
                                            // </div>
                                                '...Processing'
                                            : 
                                                'Sign up'
                                            } */}
                                            Upload Apartment
                                            </button>
                                        </div>
                                </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;