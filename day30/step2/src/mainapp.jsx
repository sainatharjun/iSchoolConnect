import { Component } from "react";
import ClassBasedComponent from "./components/class.component";
import FunctionBasedComponent from "./components/function.component";
import MemoFunctionBasedComponent from "./components/memo.function.component";
import PureClassBasedComponent from "./components/pure.class.component";

class MainApp extends Component{
    // component types
    state = {
        power : 1
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    setPower = ()=>{
        this.setState({
            power : 5
        })
    }
    render(){

        return <div>
                    <h1>Main Application | Power is { this.state.power }</h1>
                    <button onClick={ this.increasePower }>Increase Power</button>
                    &nbsp;
                    &nbsp;
                    <button onClick={ this.setPower }>Set Power</button>
                    <hr/>
                    <ClassBasedComponent power={ this.state.power }/>
                    <FunctionBasedComponent power={ this.state.power }/>
                    <PureClassBasedComponent power={ this.state.power }/>
                    <MemoFunctionBasedComponent power={ this.state.power }/>
               </div>
    }
}

export default MainApp;