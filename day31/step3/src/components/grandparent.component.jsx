import { Component } from "react";
import { FamilyContext } from "../contexts/family.context";
import ParentComp from "./parent.component";

class GrandParentComp extends Component{
    state = {
        power : 0
    }
    changePower = ()=>{
        this.setState({
            power : Math.round( Math.random() * 1000 )
        })
    }
    render(){
        return <div style={ { border : "2px solid red", padding : "10px"} } className="container">
                    <h2>GrandParent Component | Power : { this.state.power } </h2>
                    <button onClick={ this.changePower }>Change Power</button>
                    <hr />
                    <FamilyContext.Provider value={ this.state.power }>
                        <ParentComp/>
                    </FamilyContext.Provider>
                </div>
    }
}

export default GrandParentComp