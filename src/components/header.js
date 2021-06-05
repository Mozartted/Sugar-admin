import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter, Link, NavLink} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
// import {logout} from "../store/Actions/Auth"

import StyledLinks from "./styled-links"

import Mixpanel from "mixpanel-browser"

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

import analytics from "../modules/analytics"

class Header extends Component {
	constructor(props){
		super(props);

		this.displayPath = this.displayPath.bind(this)
	}

	static propTypes = {
		// isLoggedIn: PropTypes.bool.isRequired
	}

	forbiddenPaths = [
        '/forgotpassword',
        '/resetpassword',
        '/emailconfirmation',
        '/addphone',
        '/phoneconfirmation',
        '/onboarding/addbank',
        '/onboarding/addbank',
        '/onboarding/addcard',
        '/onboarding/create-contract'
	];
	
	componentDidMount(){
		// Mixpanel.init(process.env.REACT_APP_MIXPANEL_ID);
		if(this.props.currentUser){
			analytics.identify(this.props.currentUser.id, {
				first_name: this.props.currentUser.first_name,
				last_name: this.props.currentUser.last_name,
				email: this.props.currentUser.password
			})
		}
	}

    displayPath (){
        let response = true;
        this.forbiddenPaths.forEach(item => {
            if(item == this.props.location.pathname){
                // console.log(false)
                response =  false;
            }
        })

        return response;
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
		let isActive = this.props.location.pathname === this.props.to;
		return (
			<>
				{
					this.displayPath() ? 
					<>
						<nav className="navbar navbar-expand-lg  border-0 bg-transparent">
							<div className="container">
								<Link className="navbar-brand" data-tut="reactour__1" to="/home">
									<img src={require('../assets/img/logo.svg')}/> <span className="badge badge-soft-warning"> Beta </span>
								</Link>
								<button className="navbar-toggler" type="button" data-toggle="modal" data-target="#modalVerticalLeft" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									{/* <span className="navbar-toggler-icon text-primary"></span> */}
									<span className="text-primary">
										<i className="fe fe-menu"></i>
									</span>
								</button>

								{
									this.props.currentUser ? 
										<div className="collapse navbar-collapse" id="navbarSupportedContent">
											<ul className="navbar-nav mr-auto">
												<li className="nav-item mt-2 mx-2">
													<StyledLinks className="nav-link" to="/home" renderActiveIcon={() => <HomeActive height={15}/>} renderInactiveIcon={() => <HomeBase height={15}/> }>  Home </StyledLinks>
												</li>
												<li className="nav-item  mt-2 mx-2">
													<StyledLinks className="nav-link" to="/contracts" renderActiveIcon={() => <ContractActive height={15}/>} renderInactiveIcon={() => <ContractBase height={15}/> }>  Contracts </StyledLinks>
												</li>
												<li className="nav-item  mt-2 mx-2">
													<StyledLinks className="nav-link" to="/wallet" renderActiveIcon={() => <CreditActive height={15}/>} renderInactiveIcon={() => <CreditBase height={15}/> }>  Wallet </StyledLinks>
												</li>
												<li className="nav-item  mt-2 mx-2">
													<StyledLinks className="nav-link" to="/settings" renderActiveIcon={() => <ControlsActive height={15}/>} renderInactiveIcon={() => <ControlsBase height={15}/> }>  Settings </StyledLinks>
												</li>
												
												{/* <li className="nav-item mt-2 mx-2">
													
												</li> */}
												<li className="nav-item dropdown">
													<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
													<span className="font-weight-bolder mr-2"> {`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</span>
														<div className="avatar avatar-sm avatar-online">
															{
																this.props.currentUser.profile_image ? <img src={this.props.currentUser.profile_image} className="avatar-img rounded-circle" alt="..."/>:
																<img src="https://i.pinimg.com/originals/33/be/ca/33becaa4f5b57f087a68695becfeec26.png" className="avatar-img rounded-circle" alt="..."/>
															}
														</div>
													</a>
													<div className="dropdown-menu" aria-labelledby="navbarDropdown">
														<a className="dropdown-item pointer" onClick={this.props.logout}> <i className="fe fe-power"></i> Logout</a>
													</div>
												</li>
											</ul>
										</div>
									:
									null
								}
							</div>
						</nav>
						<div className="d-block d-md-none">
							<div className="modal fade" id="modalVerticalLeft" tabIndex={-1} role="dialog" aria-hidden="true">
								<div className="modal-dialog modal-dialog-vertical" role="document">
									<div className="modal-content">
									<nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
										<div className="container-fluid">
											{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
											<span className="navbar-toggler-icon"></span>
											</button>
											<a className="navbar-brand" href="./index.html">
											<img src="./assets/img/logo.svg" className="navbar-brand-img 
											mx-auto" alt="..." />
											</a>

											<div className="navbar-user d-md-none">
												<div className="dropdown">
													<a href="#" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<div className="avatar avatar-sm avatar-online">
														<img src="./assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
													</div>
													</a>

													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
													<a href="./profile-posts.html" className="dropdown-item">Profile</a>
													<a href="./account-general.html" className="dropdown-item">Settings</a>
													<hr className="dropdown-divider"/>
													<a href="./sign-in.html" className="dropdown-item">Logout</a>
													</div>

												</div>

											</div> */}

											<div className="navbar-mobile-view" id="sidebarCollapse" >
												<Link className="navbar-brand mb-4" data-tut="reactour__1" to="/home">
													<img className="navbar-brand-img" src={require('../assets/img/logo.svg')}/>  <span className="badge badge-soft-warning"> Beta </span>
												</Link>
											{
													this.props.currentUser ? 
													<>
														<ul className="navbar-nav">
															<li className="nav-item">
																<StyledLinks className="nav-link" to="/home" renderActiveIcon={() => <HomeActive height={15}/>} renderInactiveIcon={() => <HomeBase height={15}/> }>  Home </StyledLinks>
															</li>
															<li className="nav-item">
																<StyledLinks className="nav-link" to="/contracts" renderActiveIcon={() => <ContractActive height={15}/>} renderInactiveIcon={() => <ContractBase height={15}/> }>  Contracts </StyledLinks>
															</li>
															<li className="nav-item">
																<StyledLinks className="nav-link" to="/wallet" renderActiveIcon={() => <CreditActive height={15}/>} renderInactiveIcon={() => <CreditBase height={15}/> }>  Wallet </StyledLinks>
															</li>
															<li className="nav-item">
																<StyledLinks className="nav-link" to="/settings" renderActiveIcon={() => <ControlsActive height={15}/>} renderInactiveIcon={() => <ControlsBase height={15}/> }>  Settings </StyledLinks>
															</li>
															
															{/* <li className="nav-item mt-2 mx-2">
																
															</li> */}
															<li className="nav-item dropdown">
																<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
																<span className="font-weight-bolder mr-2"> {`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</span>
																	<div className="avatar avatar-sm avatar-online">
																		{
																			this.props.currentUser.profile_image ? <img src={this.props.currentUser.profile_image} className="avatar-img rounded-circle" alt="..."/>:
																			<img src="https://i.pinimg.com/originals/33/be/ca/33becaa4f5b57f087a68695becfeec26.png" className="avatar-img rounded-circle" alt="..."/>
																		}
																	</div>
																</a>
																<div className="dropdown-menu" aria-labelledby="navbarDropdown">
																	{/* <a className="dropdown-item pointer" onClick={this.props.logout}> <i className="fe fe-power"></i> Logout</a> */}
																</div>
															</li>
														</ul>
														{/* <hr className="navbar-divider my-3"/>

														<div className="mt-auto"></div>
														<div className="navbar-user d-flex" id="sidebarUser">
															<a href="#sidebarModalActivity" className="navbar-user-link" data-toggle="modal">
															<span className="icon">
																<i className="fe fe-bell"></i>
															</span>
															</a>

															<div className="dropup">

															<a href="#" id="sidebarIconCopy" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<div className="avatar avatar-sm avatar-online">
																<img src="./assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
																</div>
															</a>

															<div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
																<a href="./profile-posts.html" className="dropdown-item">Profile</a>
																<a href="./account-general.html" className="dropdown-item">Settings</a>
																<hr className="dropdown-divider"/>
																<a href="./sign-in.html" className="dropdown-item">Logout</a>
															</div>

															</div>

															<a href="#sidebarModalSearch" className="navbar-user-link" data-toggle="modal">
															<span className="icon">
																<i className="fe fe-search"></i>
															</span>
															</a>

														</div> */}
													</>: null
												}

											</div>
											</div>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</>
					: null
				}

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
export default connect(mapStateToProps, mapDispatchToProps)(withCookies(withRouter(Header)));