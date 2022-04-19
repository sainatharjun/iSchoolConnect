import { Component } from "react";
import GrandParentComp from "./components/grandparent.component";

class MainApp extends Component{
    render(){
        return <div className="container">
                    <h1>Welcome to My Application</h1>
                    <GrandParentComp/>
                </div>
    }
}

export default MainApp