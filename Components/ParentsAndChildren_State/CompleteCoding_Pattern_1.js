import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Frarthur'
        };
    }
    
    changeName(newName){
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

    handleChange(e){
        const name = e.target.value;
        this.props.onChange(name);
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
        const name = this.props.name;
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