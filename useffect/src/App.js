import React, {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [resourceType,setResourceType] = useState('posts')
  const[items,setItems] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleWidth)
  },[windowWidth])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))

    // if we add return function or value in this useEffect body it will run first
    //  and then the body from start not like the past java,dart ways
    // so have clean up in body if you got return method 

  },[resourceType])

  return (
    <div>
      {windowWidth}
    </div>
    // <>
    //    <div>
    //    <button onClick={() =>setResourceType('Posts')}> Posts  </button>
    //     <button onClick={() =>setResourceType('Users')}> Users  </button>
    //     <button onClick={() =>setResourceType('Comments')}>  Comments  </button>
    //    </div>

    //    <h1>{resourceType}</h1>

    //    {items.map(item => {
    //     return <pre>{JSON.stringify(item)}</pre>
    //    })}
    // </>
  );
}

export default App;
