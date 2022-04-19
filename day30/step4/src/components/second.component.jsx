import { Component } from "react";
import withPower from "./with.power";

class SecondComp extends Component{
    render(){
        return <div>
                    <h2>Hello from Second Component</h2>
                    <h3>Power : { this.props.power }</h3>
                    <h3>Title : { this.props.title }</h3>
                    <h3>Version : { this.props.version }</h3>
                    <button onClick={this.props.incPow}>Increase Power</button>
                </div>
    }
}

export default withPower(SecondComp)