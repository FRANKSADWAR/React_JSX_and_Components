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
        return (
            <div id="timers">
                <EditableTimer
                    title="Learn React"
                    project = 'Web domination'
                    elapsed = '8986300'
                    runningSince = {null}
                    editFormOpen = {false}
                />
                <EditableTimer
                    title='Learn extreme ironing'
                    project = 'World domination'
                    elapsed = '3890985'
                    runningSince = {null}
                    editFormOpen = {true}
                />
            </div>
        )
    }
}

class EditableTimer extends React.Component {
    render(){
        if(this.props.editFormOpen){
           return (

           )
        }
        else {
            return (
                <TimerForm 
                    title={this.props.title}
                    project={this.props.project}
                />
            )

        }
    }
}