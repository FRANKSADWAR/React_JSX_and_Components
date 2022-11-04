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
        return (
            <ChildClass/>
        );
    }



}

class ChildClass extends React.Component {
    render(){
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names" onChange={this.handleChange}>
                    <option value="Frarthur">
                        Frarthur
                    </option>

                    <option value="Gromulus">
                        Gromulus
                    </option>

                    <option value="Thinkpiece">
                        Thinkpiece
                    </option>
                </select>
            </div>
        );
    }
}