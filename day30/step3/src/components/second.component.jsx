import { Component } from "react";

class SecondComp extends Component{
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
                    <h2>Hello from Second Component</h2>
                    <h3>Power : { this.state.power }</h3>
                    <button onClick={this.increasePower}>Increase Power</button>
                </div>
    }
}

export default SecondComp