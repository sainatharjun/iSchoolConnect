import { Component } from "react";

class HeroComp extends Component{
    render(){
        if( this.props.power > 5 ){
            return <div style={ { margin : '10px', backgroundColor : "silver", padding : "10px", width : "200px"} }>
                    <h2>Hero Component</h2>
                    <h3>Power : { this.props.power }</h3>
                </div>
        }else{
            throw new Error("Hero's power is less")
        }
    }
}

export default HeroComp