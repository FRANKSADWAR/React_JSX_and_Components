import React from "react";
import ReactDOM from "react-dom";

function PhoneNumberForm(){
    const numberRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const number = numberRef.current.value;
        
        if( (!Number.isNaN(Number(number))) ){
            alert('Error. Only numbers are allowed.');
        }
        else if(number.length <=10){
            alert('Error. Number length exceeds 10 digits');
        }
        else{
            alert(`Sending confirmation code to ${number}.`);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Phone Number: 
                <input type="tel" ref={numberRef}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}
