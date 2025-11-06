import { useEffect, useState } from "react";
export default function ApiGet(){


     const [usersData,setUsersData]=useState([])
    useEffect(()=>{
        getUsersData();
},[])

    const getUsersData= async()=> {
        const url ="http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
         console.log(response);
        setUsersData(response);
        
    }
    console.log(usersData);
    return(
        <div>
            <h1>Fetch data from API</h1>
            {
              usersData.map((user)=>(

                <ul>
                    
                       <li> {user.name} </li>
                       <li> {user.email}</li>
                       <li>{user.age}</li>
                </ul>

            ))
            }
            </div>
    )
}