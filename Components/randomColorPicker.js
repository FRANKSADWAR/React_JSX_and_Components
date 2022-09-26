import React from "react";
import ReactDOM from "react-dom";

class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: [34, 174, 235]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            color: this.chooseColor()
        });
    }

    componentDidMount(){
        this.applyColor();
    }
    
    componentDidUpdate(prevProps, prevState){
        this.applyColor();
    }

    formatColor(ary){
        return "rgb(" + ary.join(", ") + ")";
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
        return  (
            <div>
                <h1 className={this.isLight() ? "white" : "black"}>
                    Your color is {this.formatColor(this.state.color)}
                </h1>
                <Button light={this.isLight()} onClick={this.handleClick}/>
            </div>
        );
    }
}

class Button extends React.Component {
    render(){
        return (
            <button className={this.props.light ? 'light-button' : 'dark-button'} 
                 onClick={this.props.onClick}>
                Refresh    
            </button>
        );
    }
}
ReactDOM.render(<Random/>, document.getElementById('content'));