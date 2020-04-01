import React from 'react';

import './signin.style.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
        console.log(event.target)
    }


    changeHandler = event => {
        console.log(event.target.value);
        const { value , name } = event.target;

        this.setState({ [name]: value })

        // console.log(this.state)
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Please Sign In with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.changeHandler} value={this.state.email} required />
                    <label>Please Provide Email Address</label>

                    <input type="password" name="password" onChange={this.changeHandler} value={this.state.password} required />
                    <label>Please Provide Password</label>

                    <input type="submit" value="SignIn" />
                </form>
            </div>
        )
    }
}

export default SignIn;
