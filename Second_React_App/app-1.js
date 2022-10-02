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
                <TimerForm 
                title={this.props.title}
                project={this.props.project}
            />
           )
        }
        else {
            return (
                <TimerForm
                    title = {this.props.title}
                    project = {this.props.project}
                    elapsed = {this.props.elapsed}
                />
            )

        }
    }
}

class TimerForm extends React.Component {
    render(){
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

class ToggleableTimerForm extends React.Component {
    render(){
        if(this.props.isOpen) {
            return (
                <TimerForm/>
            );
        }
        else {
            return (
                <div className="ui basic content center aligned segment">
                    <button className="ui basic button icon">
                        <i className="plus icon"/>
                    </button>
                </div>
            );
        }
    }
} 