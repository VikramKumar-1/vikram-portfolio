import { useState } from "react";

function FormPractice(){

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    return(
        <div>

            <h1>Controller Componenet</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            <br/><br/>
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}placeholder="password"/>
            <br/><br/>
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email"/>
            <br/> <br/>
           <button>Submit</button>

           <button onClick={()=>{setEmail('');setName('');setPassword('')}}>clear</button> 

           <h3>{name}</h3> 
           <h3>{password}</h3>
           <h3>{email}</h3>
        </div>

    )
}
export default FormPractice