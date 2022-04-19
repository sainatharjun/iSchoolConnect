import { PureComponent } from "react";

class PureClassBasedComponent extends PureComponent{
     render(){
         console.log("PureClassBasedComponent's render was called ", this.props.power, Math.random() );
          return <div>
                     <h1>Pure Class Based Component</h1>
                     <h3>Power is { this.props.power }</h3>
                </div>
     }
 }

 export default PureClassBasedComponent;