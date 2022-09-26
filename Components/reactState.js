/**
 * The state of react components mpostly live within the component class itself, as compared to props, which may be from outside i.e passed from parent components.
 * The state of the react components is initialized within the constructor and is changed using the setState function.
 */

import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mood: 'great',
            hungry: false
        };
    }
    render(){

    }
}