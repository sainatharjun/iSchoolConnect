import { Component } from "react";
import ChildComp from "./child.component";

class MainApp extends Component{
    state = {
        power : 5
    }
    constructor(){
        super();
        console.log("MainApp's constructor was called")
    }
    componentDidMount(){
        console.log("MainApp's componentDidMount was called")
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    decreasePower = ()=>{
        this.setState({
            power : this.state.power - 1
        })
    }
    render(){
        console.log("MainApp's render was called")
        return <div>
                    <h1>Welcome to My Application</h1>
                    <button onClick={ this.increasePower }>Incease Power</button>
                    <button onClick={ this.decreasePower }>Decrease Power</button>
                    <hr />
                    { this.state.power < 10 && <ChildComp pow={ this.state.power }/>}
                </div>
    }
}

export default MainApp

// npm i --force
