import { Component } from "react";

class FirstComp extends Component{
    state = {
        power : 0
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    render(){
        return <div>
                    <h2>Hello from First Component</h2>
                    <h3>Power : { this.state.power }</h3>
                    <button onClick={this.increasePower}>Increase Power</button>
                </div>
    }
}

export default FirstComp