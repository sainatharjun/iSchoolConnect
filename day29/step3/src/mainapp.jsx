import { Component } from "react";

class MainApp extends Component{
    state = {
        power : 0
    }
    increasePower = ()=>{
       /*  this.setState({
            power : this.state.power + 1
        });
        // console.log("Increase Power : ",this.state.power);
        if(this.state.power > 9){
            alert("hero is strong")
        } */

        /*         
        this.setState({
            power : this.state.power + 1
        }, ()=>{
            if(this.state.power > 9){
                alert("hero is strong")
            }
        }); 
        */
        this.setState((currentState, currentProps)=>{
            console.log(currentState, currentProps)
           return {
                power : currentState.power + 1
            }
        }, ()=>{
            if(this.state.power > 9){
                alert("hero is strong")
            }
        });
    }
    decreasePower = ()=>{
        this.setState({
            power : this.state.power - 1
        });
        console.log("Decrease Power : ",this.state.power);
    }
    render(){
        return <div>
                    <h1>Welcome to My Application</h1>
                    <h2>Power : { this.state.power }</h2>
                    <h3>Hero is <span>{ this.state.power > 9 ? 'strong' : 'not ready' }</span></h3>
                    <button onClick={ this.increasePower }>Increase Power</button>
                    <button onClick={ this.decreasePower }>Decrease Power</button>

                </div>
    }
}

export default MainApp
