import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Frarthur'
        };
    }
    
    // we have to define a function that uses setState to update state, and then pass it down to the stateless component as a prop
    changeName(newName){ // create a function to change the state of this component
        this.setState({
            name: newName
        });
    }

    render(){
        return (
            <div>
                <Child onChange={this.changeName}/>
                <Sibling name={this.state.name}/>
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){ // create a function that calls the function to change state of the parent as an event listener
        const name = e.target.value;
        this.props.onChange(name); // pass the function as a prop
    }

    render(){
        return (
            <div>
                <select id="great-names" onChange={this.handleChange}> 
                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromolus">Gromolus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}

class Sibling extends React.Component {
    
    render(){
        const name = this.props.name; // display the name using the state object passed here as a prop
        return (
            <div>
                <h1>Hey, my name is {name}</h1>
                <h2>Don't you think {name} is the pretiest name ever ? </h2>
                <h2>Sure am glad that my parents picked {name}! </h2>
            </div>
        )
    }
}

ReactDOM.render(<Parent/>, document.getElementById("app"));