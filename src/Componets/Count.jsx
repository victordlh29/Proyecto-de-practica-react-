import React from "react";

const Count = () => {
    const[contador,setCount] = React.useState(0)
    const mas=()=>{setCount(contador+1)}
    const menos=()=>{setCount(contador-1)}
  return (
    <div>
        <br />
        <h2>Contador</h2>
        <h3>Contador: {contador}</h3>
        {/* <h4>{contador%2==0 ? 'Es par': 'Es impar'}</h4> */}
        <button className='btn btn-primary ms-2' onClick={()=>mas()}>+</button>
        <button className='btn btn-success ms-2' onClick={()=>menos()}>-</button>
    </div>
  )
}

export default Count;