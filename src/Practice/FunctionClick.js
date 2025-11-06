import React from "react"

//How to handle click event in Function component
function FunctionClick () {
     function clickHandler(){
        console.log('Button Clicked')
     }
 
  
    return (
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
    )
  
}

export default FunctionClick