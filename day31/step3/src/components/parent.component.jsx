import { Component } from "react";
import ChildComp from "./child.component";

class ParentComp extends Component{
    render(){
        return <div style={ { border : "2px solid red", padding : "10px"} } className="container">
                    <h2>Parent Component</h2>
                    <hr />
                    <ChildComp/>
                </div>
    }
}

export default ParentComp