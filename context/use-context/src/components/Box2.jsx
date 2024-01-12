import React from 'react'
import Box3 from './Box3'

const Box2 = () => {
  return (
    <div className="box-1" style={
        {
        height: '300px',
        width: '300px', 
        backgroundColor: 'gray',
        color: 'white',
        }
        }>
        BOX 2
        <Box3/>
        </div>
  )
}

export default Box2