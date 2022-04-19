import React from 'react';

function MemoFunctionBasedComponent(props){
    console.log("MemoFunctionBasedComponent's render was called ", props.power, Math.random() );
     return <div>
                <h1>Memo Function Based Component</h1>
                <h3>Power is {  props.power }</h3>
           </div>
}

export default React.memo(MemoFunctionBasedComponent);