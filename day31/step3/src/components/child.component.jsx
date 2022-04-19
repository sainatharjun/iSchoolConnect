import { Component } from "react";
import { FamilyContext } from "../contexts/family.context";

class ChildComp extends Component{
    render(){
        return <div style={ { border : "2px solid red", padding : "10px"} } className="container">
                    <h2>Child Component</h2>
                    <hr />
                    <FamilyContext.Consumer>{(val)=><h4>Power is : {val}</h4>}</FamilyContext.Consumer>
                </div>
    }
}

export default ChildComp