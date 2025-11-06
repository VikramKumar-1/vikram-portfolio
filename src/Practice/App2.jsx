import { useState } from "react";

function App2(){
    const [value,setValue]=useState("Vikram kumar")
    return(
      // <div>
       //  <h1>Get INput field VAlue</h1>
      //   <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="Enter user name"/>


      // </div>
      <div>
        <h1>Get INput field VAlue</h1>
        <input type="text" value={value} onChange={(vik)=>setValue(vik.target.value)} placeholder="Enter user name"/>
       <h1>{value}</h1>
       <button onClick={()=>setValue("")}> Clear Value</button>

       </div>

    )


}
export default App2