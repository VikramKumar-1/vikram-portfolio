import { NavLink,Route,Routes } from 'react-router'
import ApiPost from './ApiPost'

import ApiGet from './ApiGet'



function App(){

        return(
            <div>
                <ul className='nav-list'>
                    <li> 
                        
                        <navLink to="/ApiPost">Add User</navLink>
                        <navLink to="/ApiGet">ApiGet</navLink>
                        </li>
                    </ul>  


                <Routes>
                    <Route path="/ApiPost" element={<ApiPost/>}/>
                    <Route path="/ApiGet"element={<ApiGet/>}/>
                </Routes>       
            </div>
        )
}
export default App