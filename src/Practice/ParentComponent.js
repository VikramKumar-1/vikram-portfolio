import React, { Component } from 'react'
import ChildComponent from './ChildComponent'



class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }
       this.greetParent = this.greetParent.bind(this) 
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
       //  alert (' Hello i am vikram ') ----- for display simple on pop up tab
    }

  render() {
    return (
      <div>
       < ChildComponent greetHandler={this.greetParent}/>
        </div>
    )
  }
}

export default ParentComponent