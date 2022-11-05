import React from "react";
import  ReactDOM  from "react-dom";

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Darth Vader'
        }
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName){
        this.setState({
            name : newName
        });
    }

    changeName(e){
        const nameChange = e.target.value;
        this.setState({
            
        })
    }

    render(){
        return (
            <ChildClass onChange={this.changeName}/>
        );
    }



}

class ChildClass extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const name = e.target.value;
        this.props.onChange(name);
    }

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