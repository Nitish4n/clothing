import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from 'react-redux';
import { setCurrentUser } from './reducer/user-reducer/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {


  // const {setCurrentUser } = this.props;
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user})
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          }, () => {
            console.log(this.props)
          })
        })
      }else{
        this.props.setCurrentUser({
          currentUser: userAuth
        });
      }
      
      // console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : user => dispatch(setCurrentUser(user))
  }
}
export default connect(null , mapDispatchToProps)(App);
