import { Component } from "react";

class ClassBasedComponent extends Component{
     render(){
         console.log("ClassBasedComponent's render was called ", this.props.power , Math.random());
          return <div>
                     <h1>Class Based Component</h1>
                     <h3>Power is { this.props.power }</h3>
                </div>
     }
 }

 export default ClassBasedComponent;