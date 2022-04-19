import { Component } from "react";
import ChildComp from "./child.component";

class MainApp extends Component{
    render(){
        return <div className="container">
                    <h1>Welcome to My Application</h1>
                    <ChildComp/>
                </div>
    }
}

export default MainApp