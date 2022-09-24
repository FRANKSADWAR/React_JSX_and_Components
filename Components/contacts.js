import React from "react";
import ReactDOM from "react-dom";

class Contact extends React.Component {
    constructor(props){
        super(props);
        // initialize the state to null first
        this.state =  {
            password: '',
            authorized : null
        };
        this.authorize = this.authorize.bind(this);
    }
    // set the state using a lifecycle method, setting state here triggers re-rendering
    componentDidMount(){
        this.setState({
            password:'sowrdfish',
            authorized: true
        });
    }
    // define a method/function that checks the password
    authorize(e){
        // obtain the value of password from the element
        const password = e.target.querySelector('input[type=="password"]').value;

        // check whether the password is the same as the state password
        const auth = password === this.state.password;

        // set the state based on the value of auth returned, to set state we use the setState method
        this.setState({
            authorized: auth
        });
    }
    render(){
        const login = (<form action="#" >
                          <input type="password"/>
                          <input type="submit" onSubmit={this.authorize}/>
                        </form>);

        const contactInfo = (
            <ul>
                <li>client@example.com</li>
                <li>555.555.555</li>
                <li>P.O BOX 2200</li>
            </ul>
        );                
        return (
            <div id="authorization">
                <h1>{this.state.authorized ? contactInfo : login}</h1>
                { this.state.authorized ? contactInfo : login }
            </div>
        );
    }
}

ReactDOM.render(<Contact/>, document.getElementById('app'));