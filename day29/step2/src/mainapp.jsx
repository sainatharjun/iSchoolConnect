import React, { Component } from "react";
import ChildComp from "./child.component";

class MainApp extends Component{
    ipref = React.createRef();
    state = {
        version : 0,
        title : "default title"
    }
    changeVersion = ()=>{
        this.setState({
            version : Math.round(Math.random() * 1000)
        })
    }
    changeTitle = ()=>{
        this.setState({
            title : this.ipref.current.value
        })
    }
    render(){
        return <div>
                    <h1>Prop Types / Default Props</h1>
                    <button onClick={ this.changeVersion }>Change Version</button>
                    <br />
                    <input ref={this.ipref} type="text" />
                    <button onClick={ this.changeTitle }>Change Title</button>
                    <hr/>
                    <ChildComp title={ this.state.title } version={ this.state.version }/>
                    <hr />
                    <ChildComp version={  this.state.version } title={ this.state.title }/>
                    <hr />
                    <ChildComp version={ this.state.version } title="hello there"/>
                    <hr />
                    <ChildComp version={ this.state.version } title={ this.state.title } />
                    <hr />
                    <ChildComp title={ this.state.title } version={ 10 } />
                </div>
    }
}

export default MainApp