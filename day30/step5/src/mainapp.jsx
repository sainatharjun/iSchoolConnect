import { Component } from "react";
import PopUpComp from "./popup.component";

class MainApp extends Component{
    state = {
        show : false
    }
    render(){
        return <div>
                    <h1>Main Application</h1>
                    { 
                    this.state.show ? 
                    <PopUpComp>
                        <div className="box">
                            <h1>Hello from PopUp</h1>
                            <button onClick={ ()=> this.setState({ show : false })}>Hide PopUp</button>
                        </div>
                    </PopUpComp> : 
                    <button onClick={ ()=> this.setState({ show : true })}>Show PopUp</button> 
                    }
               </div>
    }
}

export default MainApp;