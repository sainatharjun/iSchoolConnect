function FunctionBasedComponent(props){
         console.log("FunctionBasedComponent's render was called ", props.power, Math.random() );
          return <div>
                     <h1>Function Based Component</h1>
                     <h3>Power is {  props.power }</h3>
                </div>
 }

 export default FunctionBasedComponent;