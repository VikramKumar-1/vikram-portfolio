import React from 'react'

function NameList(){
     //const names = ['apple', 'orange', 'coconut', 'pineapple'];
    // const listitems = ['Dettol', 'star','sun'];
      const IPL =["CSK","MI", "RCB", "CSK"]
     return(
       <div>
        {
        IPL.map(ipl=> <h1 key={ipl}>{ipl}</h1>)
       // IPL.map((ipl, index)=> <h1 key={index}>{ipl} index is {index} </h1>) //duplicate bhi rahega toh index se alag ho jayega -- index tag lga ke
       // listitems.map(item => <h2>{item}</h2>)
       // names.map(name => <h2><ul>{name}</ul></h2>)
       }
       </div>

     )
}




export default NameList