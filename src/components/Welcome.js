
import React from 'react'

//function Welcome(props) {
  function Welcome({name}){  //-----Destructing props
  return (
  <h1>Hello, {name}!</h1>
 // <h1>Hello, {props.name}!</h1>
  
  );
 }
 
export default Welcome;
