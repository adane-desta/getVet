
import './styles/global.css'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/Signup';
import RoleSelect from './pages/roleSelect/RoleSelect';
import Home from './pages/landing/Landing';

function App(){
    return(

        <div>
            <Routes >
                <Route path='/' element={<Landing /> } />
                <Route path='login' element={ <Login /> } />
                <Route path='signup' element={ <Signup /> } />
                <Route path='roleselect' element={ <RoleSelect /> } />
                <Route path='home' element={ <Home /> } />
            </Routes>

        </div>
    )
}
export default App;