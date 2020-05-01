import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email , password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error(error)
        }
        
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
                    <FormInput label="Email" type="email" name="email" handleChange={this.changeHandler} value={this.state.email} required />
                    
                    <FormInput label="Password" type="password" name="password" handleChange={this.changeHandler} value={this.state.password} required />

                    <div className="buttons">
                        <CustomButton type="submit" > Sign In </CustomButton>

                        <CustomButton onClick={signInWithGoogle} 
                            isGoogleSignIn>
                            Sign In With Gogle
                        </CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
