import React, { useState } from 'react';

function  Condition(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if(isLoggedIn){
   
   // return <div>isLoggedIn <h2>Welcome Vikrm</h2></div>;
    return <div>{isLoggedIn && <h2>Welcome Vikrm</h2>}</div>; //---if is true it display otherwise it not display any thing make sure else condition should comment out
  }
  
   //else{
   // return <div> Welcome Guest </div>;
   //}
 }











export default Condition