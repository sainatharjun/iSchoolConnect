import { Component } from "react";
import FirstComp from "./components/first.component";
import SecondComp from "./components/second.component";

class MainApp extends Component{
    render(){
        return <div>
                    <h1>Main Application</h1>
                    <hr />
                    <FirstComp title="First Component" version={101}/>
                    <SecondComp title="Second Component" version={201}/>
               </div>
    }
}

export default MainApp;