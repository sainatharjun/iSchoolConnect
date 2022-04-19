import { Component } from "react";

class ChildComp extends Component{
    state = {
        childPower : 1
    }
    snapshots = [];
    constructor(){
        super();
        console.log("ChildComp's constructor was called")
    }
    static getDerivedStateFromProps(currentProps, currentState){
        // console.log(arguments[0], arguments[1]);
        //console.log(currentProps, currentState);
        console.log("ChildComp's getDerivedStateFromProps was called");
        return {
            childPower : currentProps.pow
        }
    }
    componentDidMount(){
        console.log("ChildComp's componentDidMount was called");
    }
    shouldComponentUpdate(currentProps, currentState){
        console.log("ChildComp's shouldComponentUpdate was called");
        // console.log(currentProps, currentState);
        // console.log(this.props.pow)
        if(currentProps.pow === 6){
            return false
        }else{
            return true
        }
    }
    getSnapshotBeforeUpdate(){
        // console.log(arguments.length);
        // console.log(arguments[0], arguments[1]);
        console.log("ChildComp's getSnapshotBeforeUpdate was called")
        return {
            title : "ischool application"
        }
    }
    componentDidUpdate(currentProps, currentState, currentSnapshot){
        // console.log(arguments[0], arguments[1], arguments[2]);
        console.log("ChildComp's componentDidUpdate was called");
        this.snapshots.push({
            currentProps : currentProps,
            currentState : currentState,
            snapshot : currentSnapshot,
        });
        console.log(this.snapshots);
    }
    componentWillUnmount(){
        console.log("ChildComp's componentWillUnmount was called")
    }
    render(){
        console.log("ChildComp's render was called")
        return <div>
                    <h2>Hello From Child Component</h2>
                    <h3>Child Power is  : { this.state.childPower }</h3>
                    <h3>Power is  : { this.props.pow }</h3>
                </div>
    }
}

export default ChildComp
