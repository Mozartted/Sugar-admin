import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import Layout from "./layout"
import { withToastManager } from 'react-toast-notifications';
import gql from 'graphql-tag';
// import {autoLogin, login, setRedirectUrl} from "../../../store/Actions/Auth"


export default withToastManager(
    withRouter(Layout)
)