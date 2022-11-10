import React from "react";
import ReactDOM from "react-dom";

const styles = {
    color: 'darkcyan',
    background: 'mintcream'
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