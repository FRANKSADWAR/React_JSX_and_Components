import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from './NavBar';
 
class ProfilePage extends React.Component {
    render(){
        return (
            <div>
                <NavBar/>
                <h1>All about me!</h1>
                <p>I like moves blah blah blah blah !</p>
                <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg"/>
            </div>
        );
    }
}
ReactDOM.render(<ProfilePage/>, document.getElementById('app'));