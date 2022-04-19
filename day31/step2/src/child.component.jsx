/* 
import { Component } from "react";

class ChildComp extends Component{
    state = {
        power : 0
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    render(){
        return <div>
                    <h2>Power is : { this.state.power }</h2>
                    <button onClick={ this.increasePower }>Increase Power</button>
                </div>
    }
}

export default ChildComp 
*/

/* 
import { useState } from "react"

let ChildComp = () => {
       // console.log( useState() );
    let [ power, setPower ] = useState(0);
        return <div>
                   <h2>Power is : { power }</h2>
                    <button onClick={()=>setPower(power+1)}>Increase Power </button>
               </div>
}



export default ChildComp 
*/

/* import { useState } from "react"

let ChildComp = () => {
       // console.log( useState() );
    let [ power, setPower ] = useState(0);
    let [ version, setVersion ] = useState(0);
        return <div>
                   <h2>Power is : { power }</h2>
                   <button onClick={()=>setPower(power+1)}>Increase Power </button>
                   <h2>Version is : { version }</h2>
                   <button onClick={()=>setVersion(version+1)}>Increase Version </button>
               </div>
}



export default ChildComp  */

import { useReducer, useRef, useState } from "react"

let ChildComp = () => {
    // let [ firstname, setFirstName ] = useState('');
    // let [ lastname, setLastName ] = useState('');
    let fname = useRef();
    let lname = useRef();
    let uage = useRef();
   //  let [ heroname, setHeroName ] = useState({ firstname : '', lastname : ''});

   let reducerFun = (state, action)=>{
       // action.type
       // action.payload
        switch(action.type){
            case "UPDATEFIRSTNAME" : return {...state, firstname : fname.current.value }
            case "UPDATELASTNAME" : return {...state, lastname : lname.current.value }
            case "UPDATEAGE" : return {...state, age : uage.current.value }
            default : return state
        }
    }

   let [store, dispatch] = useReducer(reducerFun,{ firstname : '', lastname : '', age : 0})



        return <div>
                   <h2>FirstName is : { store.firstname }</h2>
                   <h2>LastName is : { store.lastname }</h2>
                   <h2>Age is : { store.age }</h2>
                   <input ref={fname} />
                   <button onClick={()=> dispatch({type : "UPDATEFIRSTNAME"})}>Change First Name </button>
                   <br />
                   <input ref={lname} />
                   <button onClick={()=> dispatch({type : "UPDATELASTNAME"})}>Change First Name </button>
                   <br />
                   <input ref={uage} />
                   <button onClick={()=> dispatch({type : "UPDATEAGE"})}>Change Age </button>
               </div>
}



export default ChildComp 