import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter, Link, NavLink} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
// import {logout} from "../store/Actions/Auth"

import StyledLinks from "./styled-links"

import {ReactComponent as ContractActive} from '../assets/img/svgs/contract-active.svg'
import {ReactComponent as ContractBase} from '../assets/img/svgs/contract-base.svg'

import {ReactComponent as ControlsActive} from '../assets/img/svgs/controls-active.svg'
import {ReactComponent as ControlsBase} from '../assets/img/svgs/controls-base.svg'

import {ReactComponent as CreditActive} from '../assets/img/svgs/credit-card-active.svg'
import {ReactComponent as CreditBase} from '../assets/img/svgs/credit-card-base.svg'

import {ReactComponent as HistoryActive} from '../assets/img/svgs/history-active.svg'
import {ReactComponent as HistoryBase} from '../assets/img/svgs/history-base.svg'

import {ReactComponent as HomeActive} from '../assets/img/svgs/home-active.svg'
import {ReactComponent as HomeBase} from '../assets/img/svgs/home-base.svg'

class Header extends Component {
	constructor(props){
		super(props);
	}

	static propTypes = {
		// isLoggedIn: PropTypes.bool.isRequired
	}

	navigateTo(value){
		// 
		// const {history} = this.props;
		// history.push(value);
	}

	signupUser(){
		const {history} = this.props;
		history.push('/signup')
	}

	toggleCreateProject(){
		this.setState({
			...this.state,
			projectToggle: this.state.projectToggle ? false : true
		})
	}

	componentWillReceiveProps(prevProps){
		if(prevProps.location !== this.props.location){
			this.setState({
				...this.state,
				location: this.props.location
			})
		}
	}

	render(){
		return (
			<>
                <>
                    <nav className="navbar navbar-expand-lg  border-0 bg-transparent">
                        <div className="container">
                            <Link className="navbar-brand" data-tut="reactour__1" to="/">
                                <img src={require('../assets/img/logo.svg')}/> <span className="badge badge-soft-warning"> Beta </span>
                            </Link>
                            {/* <button className="navbar-toggler" type="button" data-toggle="modal" data-target="#modalVerticalLeft" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="text-primary">
                                    <i className="fe fe-menu"></i>
                                </span>
                            </button> */}
                        </div>
                    </nav>
                </>
				{/* {
					this.displayPath() ? 
					: null
				} */}

			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.isAuthenticated,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = {
	// logout: logout
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));