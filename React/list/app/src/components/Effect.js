import React, { useEffect } from "react";

const Effect = () => {
    useEffect(()=>(
        console.log("Inside useEffect")
    ), [])
    return (

        <div>KAL</div>
    )
}

export default Effect;