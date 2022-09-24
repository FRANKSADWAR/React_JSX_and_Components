import React from "react";
import ReactDOM  from "react";

/**
 * Passing event functions as props from the parent component to the child component
 * The functions are also bound to the component using a constructor method
 */
class Talker extends React.Component{
    constructor(props){
        super(props);
        this.talk = this.talk.bind(this);
    }

    talk(){
        let speech='';
        for(var i=0; i < 10000; i++){
            speech += 'Blah ';
        }
        alert(speech);
    }

    render(){
        return <Button handleSpeech={this.talk}/>
    }
}

class Button extends React.Component {
    render(){
        return (
            <button onClick={this.props.handleSpeech}>
                Click Me!
            </button>
        );
    }
}
