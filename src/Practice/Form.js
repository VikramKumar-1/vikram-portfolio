import React,{ useState } from "react";

function Form(){
    const[name, setName] = useState("raj");
    const [email, setEmail]= useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };
    
    const handleChange1 = (event) => {
            setEmail(event.target.value);
    };
        const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${name} - You Entered email: ${email}
            
            
            
            Confirm`
        );
        
    };

   return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        />
    
         <br/> <br/>

        <input type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange1}
        
        />
        
       
         <br/> <br/>
         
        <button type="submit">Submit</button>
        <p>You typed: {name}</p>
        <p>You Email Typed: {email}</p>
    </form>
   ) 
}
export default Form