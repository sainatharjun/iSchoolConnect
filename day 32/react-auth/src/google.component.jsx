import { Component } from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
import { app } from "./config";


class GoogleApp extends Component{
    state = {
        status : "",
        user : {}
    }
    provider = new GoogleAuthProvider();
    auth = getAuth();
    componentDidMount(){
        this.auth.onAuthStateChanged( user => {
            // console.log(user);
            this.setState({
                user : user || 'Guest'
            })
        })
    }
    signup = ()=>{
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            console.log(result);
            console.log("User : ",result.user);
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            // const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    signout = () => {
        signOut(this.auth).then(res=>{
            console.log("signed out");
            console.log("Res : ",res);
        });
    }
    
    render(){
        return <div>
                    <h1>Welcome to Google Signup Application</h1>
                    <h2>Google signup is { this.state.status }</h2>
                    <p>{ JSON.stringify(this.state.user) }</p>
                    <button onClick={this.signup}>Signup with Google</button>
                    <button onClick={this.signout}>Sign Out</button>
                </div>
    }
}

export default GoogleApp