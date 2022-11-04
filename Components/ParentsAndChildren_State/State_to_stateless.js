import React from "react";
import  ReactDOM  from "react-dom";

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Darth Vader'
        }

    }

    changeName(newName){
        this.setState({
            name : newName
        });
    }

    changeNameTest(e){
        let newName = e.target.value;
        this.setState({
            name: newName
        });
    }

    render(){

    }



}

class ChildClass extends React.Component {
    
}