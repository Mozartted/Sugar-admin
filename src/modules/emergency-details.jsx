import React from 'react'
import SpModal from '../Components/Modal';
import {FormGroup, Label, Input} from 'reactstrap';
import {FormInputSet, FormSelectSet} from '../Components/form-components';
import PropTypes from 'prop-types';
import MapView from '../Components/map-view';

export default class emergencyDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.createProject = this.createProject.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    static defaultProps = {
        show: false,
        className:''
    }

    static propTypes = {
        show: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
        details: PropTypes.shape({})
    }

    handleInput(name, v){
        this.setState({
            ...this.state,
            [name]: v
        })
    }

    createProject(e){
        e.preventDefault();
        alert("You've been able to create a new project")
    }


    render(){
        return (
            <SpModal show={this.props.show} toggle={this.props.toggle} header="Emergency Details" save={this.createProject} saveText="Done">
            {
                this.props.details && 
                <MapView 
                    location={{longitude: this.props.details.longitude, latitude: this.props.details.latitude}} 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcrc0Go3XQnztr3PdDepiPZFdnUyfr3I4&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            }
            </SpModal>
        );
    }
}