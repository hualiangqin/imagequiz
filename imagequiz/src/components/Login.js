import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            signin: false,
        };
    }

    submit = (event) => {
        if (this.state.username.trim().length > 0){
            this.setState({signin: true})
        }
        event.preventDefault();

    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    render(){
        let from = {pathname: '/imagequiz', state: {user: this.state.username}};
        if (this.state.signin){
            return(
                <Redirect to={from} />
            );
        }

        return(
            <div>
                <form onSubmit={this.submit}>
                    <label>User Name: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Login;