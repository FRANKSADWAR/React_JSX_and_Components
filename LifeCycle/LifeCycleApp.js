import React from "react";
import ReactDOM from "react-dom";
import {Profile} from './Profile';
import { Directory } from "./Directory";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUsername: null
        }

        this.handleChoose = this.handleChoose.bind(this);
        this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(this);
    }

    handleChoose(newUsername){
        this.setState({
            currentUsername: newUsername
        });
    }

    handleReturnToDirectoryClick(){
        this.setState({ currentUsername : null });
    }
    render(){
        let body;
        if(this.state.currentUsername){
            body = <profile
        }
    }


    
}