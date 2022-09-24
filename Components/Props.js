/**
 *      Props are used to pass data to components, i.e from parent components to child components.
 *      The parent components usually own the props that they pass to the child components.
 * 
 */
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello, Welcome to the NEWZ </h1>
                {/**The prop is created by the parent component and then passed down to the child component */}
                <Greeting name="adwar"/> 
                <article>
                    <p>Major new all over the country</p>
                </article>
            </div>
        )
    }
}

class Greeting extends React.Component {
    render(){
        return <h1>Hi there, {this.props.name} </h1>
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));