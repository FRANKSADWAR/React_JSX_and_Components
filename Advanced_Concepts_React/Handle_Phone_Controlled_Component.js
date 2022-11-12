import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function PhoneNumberForm(){
    const [number, setNumber ] = useState(0);
    
    const handleChange = (e) => {
        const newNumber = e.target.value;
        if( (!Number.isNaN(Number(newNumber)))  &&  (newNumber.length<=10)  ){
            setNumber(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Sending confirmation code to ${number}.`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Phone Number: 
                <input type="tel" value={number} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}
const app = document.getElementById("app");
ReactDOM.render(<PhoneNumberForm/>,app);

/**
 * In this example, the PhoneNumber component controls the <input> element by assigning its own number state value to the value
 * attribute. Doing this turns the off the form's default behaviour of controlling its own state.
 * To keep the number state value up to date, an onChange handler is registered which can set the state value each time a change
 * is detected.
 * With this approach, the form can be updates on every change, for example making sure that the form only accepts numbers abd
 * the numbers do not exceed 10 digits.
 * 
 */