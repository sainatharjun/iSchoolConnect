import { Component } from "react";
import ReactDOM from "react-dom";

class PopUpComp extends Component{
    render(){
        return ReactDOM.createPortal(this.props.children, document.getElementById("popup"))
    }
}

export default PopUpComp;