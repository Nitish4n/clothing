import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.style.scss'

class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if(password != confirmPassword){
            alert('Password don\'t macth');
            return false;
        }

        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password) ;

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

            console.log(user);
        } catch (error) {
            console.error(error)
        }
    }


    handleChange = event => {
        // console.log(event.target)

        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, () => {
            //console.log(this.state);
        })
        
    }


    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have Account</h2>
                <span>SignUp with your email id and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Name"
                        required
                    />

                    
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />

                    
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />

                    
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        label="Confirm Password"
                    />

                    <CustomButton type="submit"> Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}


export default SignUp;