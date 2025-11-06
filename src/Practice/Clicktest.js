import React,{ Component } from 'react'

import'./test.css'
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
import ParentComponent from './ParentComponent'
import Condition from'./Condition'
import NameList from './NameList'
import ListKey from './ListKey'
import LifecycleA from './LifecycleA'




class Clicktest extends Component {
    render(){
        return(
            <div classname="App parent_component" style={{display:'flex',flexDirection:"row"}}>
                <ParentComponent/>
               {/*} <FunctionClick/>
                <ClassClick/>
                <EventBind/> 
                <Condition/>
                <NameList/> 
                <ListKey/>
                <NameList/>*/}
                <LifecycleA/>
            </div>
        )
    }
}
export default Clicktest