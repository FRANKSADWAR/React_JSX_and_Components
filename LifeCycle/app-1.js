import React from "react";
import ReactDOM from "react-dom";

class TimersDashboard extends React.Component {
    render(){
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList/>
                    <TogglableTimerForm isOpen={true}/>
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render(){
        
    }
}