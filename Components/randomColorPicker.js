import React from "react";
import ReactDOM from "react-dom";

class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: [34, 174, 235]
        };
    }

    handleClick(){
        this.setState({
            
        })
    }

    componentDidMount(){

    }
    
    componentDidUpdate(prevProps, prevState){

    }

    formatColor(ary){

    }

    isLight(){
        const rgb = this.state.color;
        return rgb.reduce()
    }
    render(){

    }
}

class Button extends React.Component {
    render(){

    }
}
ReactDOM.render(<Random/>, document.getElementById('content'));