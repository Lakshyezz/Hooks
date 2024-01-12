import React, { useContext } from 'react'
import { Box1ColorContext, ColorContext } from '../App';


const Box4 = () => {
    
    const valueRecievedFromContext = useContext(ColorContext);
    const changeBox1Color = useContext(Box1ColorContext);
    console.log('valueRecievedFromContext => ' + valueRecievedFromContext)

  return (
    <div className="box-1" 
    onClick={(e)=> {
      e.stopPropagation();
      changeBox1Color('pink');
    }}
    style={
        {
        height: '100px',
        width: '100px', 
        backgroundColor: 'orange',
        color: valueRecievedFromContext,
        }
        }>Box 4</div>
  )
}

export default Box4