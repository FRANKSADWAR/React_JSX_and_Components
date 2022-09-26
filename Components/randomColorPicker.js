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
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
    applyColor(){
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }
    
    chooseColor(){
        const random =[]; // create an array
        for(let i = 0; i < 3; i++){
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    }

    render(){

    }
}

class Button extends React.Component {
    render(){

    }
}
ReactDOM.render(<Random/>, document.getElementById('content'));