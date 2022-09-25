/**
 *   this.props .children 
 * This returns all the items in between the component class for example as illustrated below
 */

import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {
    render(){
        return (
            <div>
                <List type="Living Musician">
                    <li>Sachiko Hakaido</li>
                    <li>Harvey Steve</li>
                </List>

                <List type="living cat musician">
                    <li>King Kong the King</li>
                </List>
            </div>
        );
    }
}

class List extends React.Component {
    render(){
        let titleText = `Favorite ${this.props.type}`;
        if(this.props.children instanceof Array){
            titleText += 's';
        }
        return (
            <div>
                <h1>{titleText}</h1>
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));