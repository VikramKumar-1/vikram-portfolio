import { useState } from "react";
import { useEffect } from "react";

function ToDoApp(){
 
   const [userData,setUserData]=useState([])

    useEffect(()=>{
        getUserData();
    })

    const getUserData= async()=>{
       // const url="http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response)
    }
    return (

        <div>

            <h1> Integrated Api loader</h1>
            {
                userData.map((user)=>(
                   // <h1 key={user.name}>{user.name}</h1>
                   <ul className="user-list">
                       <li>{user.name}</li>
                       <li>{user.age}</li>
                       <li>{user.email}</li>
                       <hr></hr>
                   </ul>
                ))
            }
        </div>
    )
 
    
}
export default ToDoApp