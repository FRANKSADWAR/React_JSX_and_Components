import React from "react";
import ReactDOM from "react-dom";
/**
 * This is one way of making forms track changes being made while the user is typing using state, for example to check whether
 * the repeated password is same as the initial password 
 */

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        });
    }

    // passing value to the input will make it a controlled component, as it stops using it's internal storage 
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

ReactDOM.render(<Input/>,document.getElementById("form"));