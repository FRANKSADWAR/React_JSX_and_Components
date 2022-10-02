import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    render(){
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }

    // this method is called immediately after the render method
    componentDidMount(){
        const oneSecond = 1000;
        this.intervalID = setInterval(()=> {
            this.setState({date: new Date() });
        }, oneSecond);
    }

    // using the componentWillUnmount method to minimize side effects of the component
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
}

ReactDOM.render(<Clock/>, document.getElementById('app'));