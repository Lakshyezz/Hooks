import React, { useEffect, useState } from "react";
import axios from 'axios'
import Header from "./Header";

const StateTut = () =>{
    const [input, setInput] =  useState("Okay")
    const [count, setCount] =  useState(0)
    const [count1, setCount1] =  useState(0)
    // console.log(" just after useState log");
    useEffect(()=>{
        // const fetchBooks = async() => {
            const ap = async() =>
            {
                const res =  await axios.get("https://api.github.com/users/arindam1903").then(res => {
                       console.log(res.data['name']);
                })
         
           }
        
        ap();
            // fetchBooks()
    }, [])
    
    // https://api.github.com/users/arindam1903
    
    
    // console.log("useEffect apiData ")
    
    //      axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
            
    //          console.log("useEffect apiData "+resp)
    //      }).catch(e => {
            
        //  })
        
      
    

   const onChangedd = (inputValue) => (
         setInput(input => inputValue.target.value)
    );

    const onUp = ()=>(
        setCount(count=>count+1)
    )
    const onDown = ()=>(
        setCount1(count1=>count1-1)
    )
    return (
        <div>

            <Header name = "Lakshay">
                <p>Lakshay is learning about props</p>
            </Header>
            <p>{input}</p>
            <input type="text" onChange={onChangedd} placeholder="Type Something.."></input>
            <button onClick={onUp}>Up {count}</button>
            <button onClick={onDown}>Down {count1}</button>
        </div>
    )
}   

export default StateTut