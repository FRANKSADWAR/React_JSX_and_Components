import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";


function FileForm_Uncontrrolled(){
    const fileRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const size = fileRef.current.files[0].size;
        alert(`This file is ${size} bytes`);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="file" ref={fileRef}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

const app = document.getElementById("file_app");
ReactDOM.render(<FileForm_Uncontrrolled/>,app);