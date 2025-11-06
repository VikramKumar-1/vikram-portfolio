import React from "react";

//Arrow Function + Multiple Props

const Student = ({ sname, age, grade}) =>{
    return(
    
        <div>
          <h2>{sname}</h2>
          <p>Age:{age}</p>
          <p>Grade:{grade}</p>

        </div>


    );
}
export default Student;