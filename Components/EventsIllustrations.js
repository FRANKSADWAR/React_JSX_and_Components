import React from "react";
import ReactDOM  from "react";

/**
 * Passing event functions as props from the parent component to the child component
 * The functions are also bound to the component using a constructor method
 */
class Talker extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            // initialize the state first
        }
    }
    componentDidMount(){
        this.setState({
            // to set the state always use the setState method, one of the lifcycle methods of React
        });
    }

    handleClick(){
        let speech='';
        for(var i=0; i < 10000; i++){
            speech += 'Blah ';
        }
        alert(speech);
    }

    render(){
        return <Button onClick={this.handleClick}/>
    }
}

class Button extends React.Component {
    render(){
        return (
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        );
    }
}
ReactDOM.render(<Talker/>, document.getElementById('app'));