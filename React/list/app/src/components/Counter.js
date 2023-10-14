import React, { Component } from 'react'

class Counter extends Component{
    componentDidUpdate(prevProps, prevState){
        if(prevProps.count !== this.props.count){
            console.log("Component Updated!");
        }
    }
    render(){
        return(
            <div> 
              <h1>{this.props.count}</h1>    
            </div>
        )
    }
}
export default Counter;

const lets = (props) => {

}
// import React, { Component } from 'react'

// class Counter extends Component{

//     render(){
//         return(
//             <d></d iv>
//         )
//     }
// }
// export default Counter;
