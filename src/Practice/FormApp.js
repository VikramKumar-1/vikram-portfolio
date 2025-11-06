import React from "react";
import Form from "./Form";  // importing Form component
import LifecycleA from './LifecycleA'

function FormApp() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Basic Form Handling</h1>
     {/*<Form />   using Form component */}
      <LifecycleA/>
    </div>
  );
}

export default FormApp;
