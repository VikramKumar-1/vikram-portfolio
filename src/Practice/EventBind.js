import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
      message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)  // --best approach always use aprroach no 4
    }
    clickHandler(){
        this.setState({
            message:'Goodbye'
            
        })
        
        console.log(this)
    }
    render(){
        return(
            
            <div>                                                                                                                                                                                                                                                                                                   
                <div>{this.state.message}</div>
              
             {/* <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
             {/* <button onClick={()=> this.clickHandler()}>Click</button>*/}
              <button onClick={this.clickHandler}>Click</button> {/*-----approach no 4-----*/}

            </div>

        )
    }



}
export default EventBind