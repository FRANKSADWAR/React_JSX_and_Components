/**
 * The state of react components mpostly live within the component class itself, as compared to props, which may be from outside i.e passed from parent components.
 * The state of the react components is initialized within the constructor and is changed using the setState function.
 */

import React from "react";
import ReactDOM from "react-dom";

const yellow= '#fcfcfc';
const green = 'green';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: green
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        this.setState({
            color: yellow
        });
    }
    render(){
        return (
            <div style={{background: this.state.color}}>
                <h1>
                    Change color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}
ReactDOM.render(<Toggle/>, document.getElementById('app'));