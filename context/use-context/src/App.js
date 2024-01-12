import React, { createContext, useState } from 'react';
import './App.css';
import Box2 from './components/Box2';

const ColorContext = createContext();
const Box1ColorContext = createContext();

function App() {
  // const colorValue = 'black'
  const [colorValue,setColorValue] = useState('black');
  const [box1Color, setBox1Color] = useState('black')

  const handleChange = (e) =>{
    e.stopPropagation();
    setColorValue('white')
  }
  return (
   <ColorContext.Provider  value = {colorValue}>
      <Box1ColorContext.Provider value={setBox1Color}>
    
          <div className="box-1" 
          onClick={(e)=> handleChange(e)}
          style={
            {
              // zIndex: '1000',
            height: '400px',
            width: '400px', 
            backgroundColor: box1Color,
            color: 'white',
            }
            }>
            BOX 1
            <Box2/>
        </div>
      </Box1ColorContext.Provider>
   </ColorContext.Provider>
  );
}
export default App;
export {ColorContext, Box1ColorContext};
