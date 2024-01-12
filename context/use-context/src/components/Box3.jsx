import React from 'react'
import Box4 from './Box4'

const Box3 = () => {
  return (
    <div
    className="box-1" style={
      {
      height: '200px',
      width: '200px', 
      backgroundColor: 'green',
      color: 'white',
      }
      }>
      Box 3
        <Box4/>
        </div>
  )
}

export default Box3