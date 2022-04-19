import { Component } from "react";

class ErrorManager extends Component{
    state = {
        message : '',
        hasError : false
    }
   /*  static getDerivedStateFromError(error){
        return {
            message : error.message,
            hasError : true
        }
    } */
    componentDidCatch(error){
        this.setState({
            message : error.message,
            hasError : true
        })
    }
    render(){
        if(this.state.hasError){
            return <h3>Message : { this.state.message }</h3>
        }else{
            return this.props.children
        }
    }
}

export default ErrorManager