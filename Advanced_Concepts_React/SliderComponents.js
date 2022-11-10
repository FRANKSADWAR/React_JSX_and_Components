import React from "react";
import ReactDOM from "react-dom";

const GUINEAPATHS = [
    'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];


// this container component will do the job of handling the logic , hence being the container component
class GuineaPigsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGP : 0
        }
        this.interval = null;
        this.nextGP = this.nextGP.bind(this);
    }

    nextGP(){
        let current = this.state.currentGP;
        let next = ++current % GUINEAPATHS.length; // use the pre-increment value with a floor/modulus operation on the number of guinea pigs in the array
        this.setState({ currentGP : next });
    }

    componentDidMount(){
        this.interval = setInterval(this.nextGP, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const src = GUINEAPATHS[this.state.currentGP];
        return <GuineaPigs src={src}/>;
    }
}

// this child components will do the job of just rendering the JSX
class GuineaPigs extends React.Component {
    render(){
        let src = this.props.src;
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src}/>
            </div>
        );
    }
}