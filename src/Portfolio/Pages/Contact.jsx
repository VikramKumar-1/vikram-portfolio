import './Contact.css'
import { FaUser,FaLock } from 'react-icons/fa'
import { useState } from 'react';

export default function Contact(){

   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [mobile,setMobile]=useState("");

    const [nameError,setNameError]=useState("");
    const [emailError,setEmailError]=useState("");
    const [mobileError,setMobileError]=useState("");
   
    const [submitting, setSubmitting]=useState(false);
     const[successMessage, setSuccessMessage]=useState("");

    const handleMobile =(e)=>{
      const value = e.target.value;
      if(/^\d*$/.test(value)){
        setMobile(value);
         
      }
      
    }


   const handleSubmit = (event) => {
        event.preventDefault();
        
         setNameError("");
          setEmailError("");
          setMobileError("");

         if (name ==="") setNameError("Name is required*");
         if (email ==="")setEmailError("Email is required");
         
         if (mobile ===""){
          setMobileError("Valid Mobile no. is required");
         }else if (mobile.length !==10){
          setMobileError("Mobile must be 10 digits");
         }


          if (name === "" || email ==="" || mobile ===""|| mobile.length!==10) return;
          // alert ("Detail Submitted Successfully (:")
             
          setSubmitting(true);

          setTimeout(() => {
            setSubmitting(false);
            alert("Form submitted");
            setSuccessMessage("Detail submitted successfully");
          

           //clear inputs

            setName("");
            setEmail("");
            setMobile("");
           
          },1000);
           setSuccessMessage("");
          
         };
      return(
    
    <div className ="contact">
      
    <div>
      <h1>Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit}>
       
        
       <div style={{display:"flex", alignItems:"center",gap:"15px",marginBottom:"10px",fontSize:"150%",width:"fit-content",height:"fit-content"}}>
       <h3>Name :</h3><input type="text"id="name"value={name} onChange={(e)=> setName(e.target.value)}placeholder='Enter your name'/>
       </div>
       {nameError && <p style={{ color:"yellow"}}>{nameError}</p>}
        
        <div style={{display:"flex", alignItems:"center",gap:"15px",marginBottom:"10px",fontSize:"150%",width:"fit-content",height:"fit-content"}}>
       <h3>Email :</h3><input type="email"value={email} onChange={(event)=> setEmail(event.target.value)} placeholder='Enter Your Email'/>
           </div>
       
       {emailError && <p style={{ color:"yellow"}}>{emailError}</p>}
        
       <div style={{display:"flex", alignItems:"center",gap:"15px",marginBottom:"10px",fontSize:"150%",width:"fit-content",height:"fit-content"}}>
       <h3>Mobile :</h3> <input type="text"value={mobile} onChange={handleMobile} maxLength={10} name="mobile"placeholder='Enter Your Mobile No.'/>
       </div>

       {mobileError && <p style={{ color:"yellow"}}>{mobileError}</p>}
        
        <div>
        <button type="submit">Submit</button>
        
           {submitting && <p style={{color: "yellow"}}>Submitting...</p>}

         
         {successMessage && <p style={{color:"yellow"}}>{successMessage}</p>}
         </div>
      </form>
    
    </div>
  )
}