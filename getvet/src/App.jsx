
import './styles/global.css'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Signup from './pages/auth/signup/Signup';
import ProtectedRoute from './pages/auth/ProtectedRoute'
import RoleSelect from './pages/roleselectPage/RoleSelect';
import Home from './pages/landing/Landing';
import Login from './pages/auth/loginPage/Login';

function App(){
    return(

        <div>


            <Routes >
                <Route path='/' element={<Landing /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />
                <Route path='/roleSelect' element={ <RoleSelect /> } />
                
                <Route path='/home' 
                element={ 

                    <Home />

                } 
                />
            </Routes>

        </div>
    )
}
export default App;