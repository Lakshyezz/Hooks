import React, { Component, useEffect, useState } from 'react'
import Counter1 from './components/Counter1'
import Counter from './components/Counter';




const App = () =>{
  
  const [count, setCount] = useState(0)
  
  // useEffect(()=>(
    //   console.log("Inside useEffect")
    //   )
    // ,[count])
    
    function increament(){
      setCount(count => count+1);
    }
    
    return (
      <div>
      <p>{count}</p>
      <button onClick={increament}>Click</button>
    </div>
  )
}

export default App

// class App extends Component{

//   componentDidMount(){
//     console.log("component rendered first time");
//   }

//   constructor(){    // even before loading page it responds
//     // console.log("inside constructor");
//     super();
//     this.state =  {       // this.state refers to the current component which is app
//       count : 0,
//     }
//   }
//   //It is the primary way to update the UI and triggers a re-render of the component and all decedents.
//    increament = ()=>(this.setState({count : this.state.count+1 }) );
//   componentDidMount(){
//     console.log("component rendered first time");
//   }
//   render(){
//    return (
//     <div> 
//       <Counter1 props = {this.state.count}></Counter1>
//       <button onClick={this.increament}> Click Me</button>
//     </div>);
//   }
// }


// function App() {
  //   return (
//     <div className="App">

  
//       <p>KAL</p>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
