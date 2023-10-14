import React, { useEffect } from 'react'

const Counter1 = ({props}) =>{

    useEffect(()=>{
        console.log("Functional Component: Updating..");

        return ()=>{
            console.log("Functional Component: Removing..");
        } // this will unmount component
    },[props])

    return (
        <div >{props}</div>
    )
}


export default Counter1

// function Counter1(props){
//     return (
//         <div></div>
//     )
// }