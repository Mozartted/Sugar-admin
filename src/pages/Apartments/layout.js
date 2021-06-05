import React, { useState} from "react"
import Sidebar from "../../components/sidebar"
import { useMutation } from '@apollo/react-hooks';
import {Link} from "react-router-dom"
import cookies from "js-cookie"

const Layout = (props) => {

    const [state, updateState ] = useState({
            agencies: [],
            passwordVisible: false,
            params: {},
            loading: false,
            links: [
                {
                    anchor: "/signup",
                    name: "Enter personal information",
                    active: true
                },
                {
                    anchor: "/emailconfirmation",
                    name: "Verify email"
                },
                {
                    anchor: "/addphone",
                    name: "Add phone number"
                },
                {
                    anchor: "/phoneconfirmation",
                    name: "Verify phone number"
                },
            ]
        }
    )
    // const [signupUser, { data, loading }, ] = useMutation(props.signupMutations);


   const signup = async () => {
        const { setRedirectUrl, toastManager, history} = props
        setRedirectUrl('emailconfirmation')
        try {
            // let resp = await signupUser({ variables: { ...state.params } });
            // if(resp){
            //     const {error, data} = resp
                
            //     if(error){
            //         toastManager.add("Something went wrong", {
            //             appearance: 'error',
            //             autoDismiss: true,
            //         })
            //     }else{
            //         if(resp.data.signup.token){
            //             cookies.set('uat', resp.data.signup.token)
            //         }
            //         await props.login({user: resp.data.signup.user})
            //         toastManager.add("Successfully sign in", {
            //             appearance: 'success',
            //             autoDismiss: true,
            //         })
                    
            //         if(props.redirectUrl){
            //             history.push(props.redirectUrl)
            //         }else{
            //             history.push("emailconfirmation")
            //         }
            //     }
            // }
        }catch(err){
            
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
                                                <input onChange={onChange} name="first_name" placeholder="Enter your first name" className="form-control"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Upload door units</label>
                                                <input onChange={onChange} name="email" placeholder="Upload your doors" type="file" className="form-control"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Upload residents</label>
                                                <input onChange={onChange} name="password" type="file" className="form-control form-control-appended" placeholder="Enter a password"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-12">
                                            <button className="btn btn-primary btn-block"  onClick={signup}>
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