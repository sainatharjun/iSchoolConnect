import { Component } from "react";

let withPower = (OriginalComponent)=>{
    class NewComp extends Component{
        state = {
            power : 0
        }
        increasePower = ()=>{
            this.setState({
                power : this.state.power + 1
            })
        }
        render(){
            // return <OriginalComponent title={ this.props.title } version={ this.props.version } incPow={ this.increasePower } power={ this.state.power }/>
            return <OriginalComponent { ...this.props } incPow={ this.increasePower } power={ this.state.power }/>
        }
    }
    return NewComp;
}

export default withPower;