import { Component } from "react";
import GoogleApp from "./google.component";
/* import LoginComp from "./login.component";
import UsersComp from "./user.component"; */

class MainApp extends Component{
    render(){
        return <div className="container">
                    <h1>Welcome to My Application</h1>
                   {/*  <UsersComp/>
                    <LoginComp/> */}
                    <GoogleApp/>
                </div>
    }
}

export default MainApp