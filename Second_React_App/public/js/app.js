/**
 * In this Timer List application, the components are first broken down from top to bottom, from the parent component to the children components.
 *  The parent component contains the EditableTimerList and the ToggableTimerForm components. 
 * The timers dashboard passes down one one prop to the ToggableTimerForm called isOpen which will be used to determine whether to render a "+" or TimerForm
 */
class TimersDashboard extends React.Component {
    render(){
        return(
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList/>
                    <ToggleableTimerForm isOpen={true}/>
                </div>
            </div>
        )
    }
}

class EditableTimerList extends React.Component {
    render(){
        return (
            <div id="timers">
                <EditableTimer
                    title= 'Learn React'
                    project = 'Web Domination'
                    elapsed = '898630'
                    runningSince = {null}
                    editFormOpen = {false}
                />
                <EditableTimer
                    title = 'Learn extreme ironing'
                    project = 'World domination'
                    elapsed = '3890985'
                    runningSince = {null}
                    editFormOpen = {true}
                />
            </div>
        );
    }
}

/*
                    EditableTimer returns either a TimerForm or a Timer based on the prop editFormOpen, if the prop is editFormOpen is true, then the TimerForm is displayed
                    else if it is false, then only the Timer is displayed
* */ 
class EditableTimer extends React.Component {
    render(){
        if(this.props.editFormOpen){
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        }
        else{
            return (
                <Timer
                    title = {this.props.title}
                    project = {this.props.project}
                    elapsedSince = {this.props.elapsed}
                    runningSince = {this.props.runningSince}
                />
            );
        }

    }
}

// building the Timer form
class TimerForm extends React.Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type='text' defaultValue={this.props.title} />
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type='text' defaultValue={this.props.project} />
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button">
                                {submitText}
                            </button>
                            <button className="ui basic red button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * This is a wrapper around the TimerForm, it will display "+" or a TimerForm 
 * The component will not pass any props to the TimerForm component, hence the fields title and project will remain/rendered empty
 */
class ToggleableTimerForm extends React.Component {
    render(){
        if(this.props.isOpen){
            return (
                <TimerForm/>
            );
        }
        else{
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

class Timer extends React.Component {
    render(){
        const elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="meta">
                        {this.props.project}
                    </div>
                    <div className="center aligned description">
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon">
                            <i className="edit icon"/>
                        </span>
                        <span className="right floated trash icon">
                            <i className="trash icon"/>
                        </span>
                    </div>
                    <div className="ui bottom attached blue basic button">
                        Start
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<TimersDashboard/>, document.getElementById('content'));