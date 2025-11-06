import React from "react";

function ListKey(){
     const persons =[
       {
         id: 1,
         name: 'Vikram',
         age: 30,
         skill: 'React'

       },
       {
         id: 2,
         name:'Clark',
         age: 26,
         skill: 'Angular'
        },
        {
         id: 3,
         name: 'Diana',
         age:28,
         skill: 'Java'

        }
     ]
      
     return(
        <div>
         {
            
           persons.map(person => (<h2> I am {person.name}. I am {person.age} years old. I know {person.skill} </h2>))
            
         }  
        </div>
     )

}
export default ListKey