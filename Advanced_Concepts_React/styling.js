import React from "react";
import ReactDOM from "react-dom";
// use the styles defined by importing them into this file
import {styles} from "./styles";

const styles = {
    color: 'darkcyan',
    background: 'mintcream',
    fontSize: styles.fontSizeHeader // apply the style here
};

class Header extends React.Component {
    render(){
        return (
            <div>
                <nav style={styles}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </nav>
            </div>
        );
    }
}

ReactDOM.render(<Header/>, document.getElementById("header"));