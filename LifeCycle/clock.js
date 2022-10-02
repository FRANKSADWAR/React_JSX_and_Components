import React from "react";
import ReactDOM from "react-dom";

/**
 *      React components have three lifecycle parts: Mounting, Updating and Unmounting stages
 *          Mounting is when the component is being initialised and put into the DOM for the first time
 *          Updating is when the component updates as a result of state change or props change
 *          Unmounting phase is when the component is being removed from the DOM
 * 
 *      An update is caused by change in state using the setState method or props when prop data is passed to components.nWhen a component's props or state changes, 
 *      the render method is called. 
 * 
 *      Another method called is known as the componentDidUpdate() 
 */

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
                {this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}
            </div>
        );
    }

    startInterval(){
        let delay;
        if(this.props.isPrecise){
            delay = 100;
        }
        else {
            delay = 1000;
        }
        this.intervalID = setInterval(()=>{
            this.setState({date: new Date()});
        }, delay);
    }

    // this method is called immediately after the render method
    componentDidMount(){
        this.startInterval();
    }

    // using the componentWillUnmount method to minimize side effects of the component
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    // updating the components 
    componentDidUpdate(prevProps){
        if(this.props.isPrecise === prevProps.isPrecise){
            return;
        }
        clearInterval(this.intervalID);
        this.startInterval();
    }
}

ReactDOM.render(<Clock/>, document.getElementById('app'));