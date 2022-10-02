import React from "react";
import { fetchUserData ,cancelFetch } from "./dataFetcher";
import { Userlist } from "./Userlist";

export class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userData : null,
        }
    }

    loadUserData(){
        this.setState({
            userData: null
        });
        this.fetchID = fetchUserData(this.props.username, (userData)=>{
            this.setState({userData});
        });
    }

    render(){
        var name, bio, friends;
        let isLoading;
        if(this.state.userData === null){
            isLoading = true;
            name = 'Loading ....';
            bio = 'Bio here ....';
            friends = new Array();
        }
        else {
            isLoading = false;
            name = this.props.userData.name;
            bio = this.state.userData.bio;
            friends = this.state.userData.friends;
        }

        let className = "Profile";
        if(isLoading){
            className += 'loading';
        }
            
        
        return (
            <div className={className}>
                <div className="profile-picture">
                    {!isLoading && (<img src={this.state.userData.profilePictureUrl} alt=""/>)}
                </div>
                <div className="profile-body">
                    <h2>{name}</h2>
                    <h3>@{this.props.username}</h3>
                    <p>{bio}</p>
                    <h3>My friends</h3>
                    <Userlist usernames={friends} onChoose={this.props.onChoose}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.loadUserData();
    }

    componentWillUnmount(prevProps){

    }

    componentDidUpdate(){

    }
}